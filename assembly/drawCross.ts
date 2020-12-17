/// <reference path="../node_modules/assemblyscript/dist/assemblyscript.d.ts" />
export namespace Image {
    export const COLOR_WIDTH = 4;

    export class Color {
        r: i32;
        g: i32;
        b: i32;
        a: i32;
    }

    export function saveImage(editedImage: Color[][]): i32 {
        const width = editedImage[0].length;
        for (let i = 0; i < editedImage.length; i++) {
            let row = editedImage[i];
            for (let j = 0; j < editedImage[j].length; j++) {
                let pixel = row[j];
                const baseindex = i * width + width;
                store<u8>(baseindex, pixel.r);
                store<u8>(baseindex + 1, pixel.g);
                store<u8>(baseindex + 2, pixel.b);
                store<u8>(baseindex + 3, pixel.a);
            }
        }
        return 0;
    }

    export function createImageArray(width: i32, height: i32): Color[][] {
        const imageWidth = width;
        const imageHeight = height;
        const img: Array<Array<Color>> = new Array<Array<Color>>(height);

        for (let i = 0; i < imageHeight; i += imageWidth * COLOR_WIDTH) {
            for (let j = 0; j < imageWidth; i += COLOR_WIDTH) {
                const r = load<u8>(i * j);
                const g = load<u8>(i * j + 1);
                const b = load<u8>(i * j + 2);
                const a = load<u8>(i * j + 3);
                img[i].push({r, g, b, a});
            }
        }

        return img;
    }

    export function drawCross(input: i32, imageWidth: i32, imageHeight: i32, crossWidth: i32): i32 {
        const savedImage = createImageArray(imageWidth, imageHeight),
            maxCrossWidth = imageHeight < imageWidth ? imageHeight : imageWidth,
            crossSize = crossWidth < maxCrossWidth ? crossWidth : maxCrossWidth,
            halfWidth = imageWidth * COLOR_WIDTH / 2, halfHeight = imageHeight * COLOR_WIDTH / 2,
            halfCrossWidth = crossSize / 2;

        for (let i = halfHeight - halfCrossWidth; i < halfHeight + halfCrossWidth; i++) {
            for (let j = 0; j < savedImage[i].length; j++) {
                let value = savedImage[i][j];
                value.r = 253;
                value.g = 255;
                value.b = 0;
                value.a = 255;
            }
        }

        for (let i = halfWidth - halfCrossWidth; i < halfWidth + halfCrossWidth; i++) {
            for (let j = 0; j < savedImage.length; j++) {
                let row = savedImage[j];
                row[i] = {
                    r: 253,
                    b: 255,
                    g: 0,
                    a: 255
                };
            }
        }

        return saveImage(savedImage);
    }
}
