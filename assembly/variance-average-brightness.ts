/// <reference path="../node_modules/assemblyscript/dist/assemblyscript.d.ts" />

import {Util, Color} from "./utils"

export namespace Varianz {
    export function grayscale(byteSize: i32): i32 {
        const CONST_R = 0.3;
        const CONST_G = 0.59;
        const CONST_B = 0.114;
        for (let i = 0; i < byteSize; i += 4) {
            const writeIndex = byteSize + i;

            const avg = i32(CONST_R * load<u8>(i) + CONST_G * load<u8>(i + 1) + CONST_B * load<u8>(i + 2));

            //TODO working
            store<u8>(writeIndex + 0, avg);
            store<u8>(writeIndex + 1, avg);
            store<u8>(writeIndex + 2, avg);
            store<u8>(writeIndex + 3, 255);

            /*
            //TODO not working
            const color: Color = new Color(avg, avg, avg, 255);
            store<u8>(writeIndex + 0, color.r);
            store<u8>(writeIndex + 1, color.g);
            store<u8>(writeIndex + 2, color.b);
            store<u8>(writeIndex + 3, color.a);
            */
        }
        return 0;
    }
}
