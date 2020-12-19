/// <reference path="../node_modules/assemblyscript/dist/assemblyscript.d.ts" />

import {Util, Color} from "./utils"

export namespace Image {


    export function drawCross(byteSize: i32, imageWidth: i32, imageHeight: i32, crossWidth: i32): i32 {
        const centerWidth: i32 = imageWidth / 2;
        const centerHeight: i32 = imageHeight / 2;
        const halfCrossWidth: i32 = crossWidth / 2;
        const crossWidthBeginning: i32 = centerWidth - halfCrossWidth;
        const crossWidthEnding: i32 = centerWidth + halfCrossWidth;
        const crossHeightBeginning: i32 = centerHeight - halfCrossWidth;
        const crossHeightEnding: i32 = centerHeight + halfCrossWidth;

        const pink: Color = new Color(253, 0, 255, 255);

        for (let row = 0; row < imageHeight; row++) {
            for (let col = 0; col < imageWidth; col++) {
                const readIndex = ((row * imageWidth) + (col)) * Util.COLOR_WIDTH;
                const writeIndex = byteSize + readIndex;
                if (row > crossHeightBeginning && row < crossHeightEnding || col > crossWidthBeginning && col < crossWidthEnding) {
                    Util.fill(writeIndex, pink);
                } else {
                    Util.copy(readIndex, writeIndex);
                }
            }
        }
        return 0;
    }
}
