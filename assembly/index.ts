// The entry file of your WebAssembly module.
import {Prime} from "./isPrime";
import {Image} from "./drawCross";

export function add(a: i32, b: i32): i32 {
    return a + b;
}

export function isPrime(x: u32): bool {
    return Prime.isPrime(x);
}

export function cross(input: i32, imageWidth: i32, imageHeight: i32, crossWidth: i32): i32 {
    return Image.drawCross(input, imageWidth, imageHeight, crossWidth);
}
