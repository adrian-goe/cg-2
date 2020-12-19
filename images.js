let mem;
let memory;
const as = {};
const originalImage = document.getElementById('originalImage')
const width = originalImage.width;
const height = originalImage.height;

async function run() {
    const ctx = await drawCanvas();
    const imageData = ctx.getImageData(0, 0, width, height);
    await setupAsTransforms(ctx, imageData)
}

run()

async function drawCanvas() {
    const img = await loadImage();
    const ctx = originalImage.getContext("2d");
    drawImage(originalImage, ctx, img);
    return ctx;
}

function drawImage(canvas, ctx, img) {
    const scale = Math.max(width / img.width, height / img.height);
    const x = (width / 2) - (img.width / 2) * scale;
    const y = (height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
}

async function loadImage() {
    return new Promise(resolve => {
        const img = new Image();
        img.src = './assets/test-image.png';
        img.onload = function () {
            resolve(this)
        };
    });
}

async function setupAsTransforms(ctx, imageData) {
    const data = imageData.data;
    const byteSize = data.length;
    const initial = 2 * (((byteSize + 0xffff) & ~0xffff) >>> 16);
    memory = new WebAssembly.Memory({initial});
    const importObject = {
        env: {memory, abort: () => console.log("Abort!")}
    };
    let module;
    module = await fetch('./assets/optimized.wasm').then(response =>
        response.arrayBuffer()
    ).then(bytes =>
        WebAssembly.instantiate(bytes, importObject)
    );

    const {instance} = module;
    if (!mem) {
        mem = new Uint8Array(memory.buffer);
    }
    Object.assign(as, {
        grayscale: as_transform("grayscale", imageData, ctx, instance),
        cross: as_transform("cross", imageData, ctx, instance),
    });
}

function updateProcessedImage(instance, byteSize) {
    const processedImage = document.getElementById('processedImage')
    const result = processedImage.getContext("2d").getImageData(0, 0, width, height)
    mem = new Uint8Array(instance.exports.memory.buffer)
    result.data.set(mem.subarray(byteSize, 2 * byteSize));
    processedImage.getContext("2d").putImageData(result, 0, 0);
}

function as_transform(fn, imageData, ctx, instance) {
    return (...args) => {
        //retrieve image pixels (4 bytes per pixel: RBGA)
        const data = imageData.data;

        //copy to bytes to shared memory
        mem.set(data);

        //invoque 'fn'  Wasm filter. We need to inform of the image byte size
        const byteSize = data.length;
        let time = performance.now();

        switch (fn) {
            case 'grayscale':
                instance.exports[fn](byteSize, ...args);
                break;
            case 'cross':
                const width = document.getElementById("crossRange").value;
                instance.exports[fn](byteSize, imageData.width, imageData.height, width, ...args);
                break;
            default:
                break
        }
        logTime(`${fn}`, time);
        updateProcessedImage(instance, byteSize);
    }
}

function logTime(name, start) {
    let end = performance.now();
    document.getElementById("time").innerText = `${name}: ${(end - start).toFixed(1)} ms `;
}

const slider = document.getElementById("crossRange");
const output = document.getElementById("crossRangeValue");
slider.oninput = function () {
    output.innerHTML = this.value;
    as.cross();
}
