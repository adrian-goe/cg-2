// The entry file of your WebAssembly module.
import {Image} from "./drawCross";


export function cross(byteSize: i32, imageWidth: i32, imageHeight: i32, crossWidth: i32): i32 {
    return Image.newDrawCross(byteSize, imageWidth, imageHeight, crossWidth);
}
