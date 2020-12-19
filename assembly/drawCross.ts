/// <reference path="../node_modules/assemblyscript/dist/assemblyscript.d.ts" />

export namespace Image {
    export const COLOR_WIDTH = 4;


    export function fill(position: i32): i32 {
        store<u8>(position, 0);
        store<u8>(position + 1, 0);
        store<u8>(position + 2, 0);
        store<u8>(position + 3, 0);
        return 0;
    }

    export function newDrawCross(byteSize: i32, imageWidth: i32, imageHeight: i32, crossWidth: i32): i32 {
        const centerWidth: i32 = imageWidth / 2;
        const centerHeight: i32 = imageHeight / 2;
        const halfCrossWidth: i32 = crossWidth / 2;
        const crossWidthBeginning: i32 = centerWidth - halfCrossWidth;
        const crossWidthEnding: i32 = centerWidth + halfCrossWidth;
        const crossHeightBeginning: i32 = centerHeight - halfCrossWidth;
        const crossHeightEnding: i32 = centerHeight + halfCrossWidth;

            store<u8>(1048575, 0);
        /*for (let i = 0; i < byteSize; i++) {
        }*/

        /*for (let i = 0; i < byteSize - COLOR_WIDTH; i += COLOR_WIDTH) {
            let pos = byteSize + i;
            fill(pos)
        }*/

        return 0;
    }
}
