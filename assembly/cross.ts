export namespace Cross {
    function drawCross(image: i32, width: i32):i32 {
        for (let i = 0; i < image; i += 4) {
            let pos = i + image;
            store<u8>(pos + 0, 255 - load<u8>(i + 0));
            store<u8>(pos + 1, 255 - load<u8>(i + 1));
            store<u8>(pos + 2, 255 - load<u8>(i + 2));
            store<u8>(pos + 3, 255);
        }
        return 0;
    }
}
