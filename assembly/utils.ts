export class Color {
    constructor(public r: i32, public  g: i32, public b: i32, public  a: i32) {
    }
}

export namespace Util {


    export const COLOR_WIDTH = 4;

    export function fill(writeIndex: i32, r: i32, g: i32, b: i32, a: i32): i32 {
        store<u8>(writeIndex, r);
        store<u8>(writeIndex + 1, g);
        store<u8>(writeIndex + 2, b);
        store<u8>(writeIndex + 3, a);
        return 0;
    }

    export function copy(readIndex: i32, writeIndex: i32): i32 {
        store<u8>(writeIndex, load<u8>(readIndex));
        store<u8>(writeIndex + 1, load<u8>(readIndex + 1));
        store<u8>(writeIndex + 2, load<u8>(readIndex + 2));
        store<u8>(writeIndex + 3, load<u8>(readIndex + 3));
        return 0;
    }
}
