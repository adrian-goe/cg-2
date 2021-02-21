// The entry file of your WebAssembly module.
import {Image} from "./drawCross";
import {Varianz} from "./variance-average-brightness";

export function cross(byteSize: i32, imageWidth: i32, imageHeight: i32, crossWidth: i32): i32 {
    return Image.drawCross(byteSize, imageWidth, imageHeight, crossWidth);
}

export function grayscale(byteSize: i32): i32 {
    return Varianz.grayscale(byteSize);
}

export function grayscaleSixBit(byteSize: i32): i32 {
    return Varianz.grayscale(byteSize, 8);
}

export function grayscaleFourBit(byteSize: i32): i32 {
    return Varianz.grayscale(byteSize, 16);
}

export function grayscaleTwoBit(byteSize: i32): i32 {
    return Varianz.grayscale(byteSize, 32);
}
