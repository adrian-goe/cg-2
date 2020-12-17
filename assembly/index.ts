// The entry file of your WebAssembly module.
import {Prime} from "./isPrime";

export function add(a: i32, b: i32): i32 {
    return a + b;
}

export function isPrime(x: u32): bool {
    return Prime.isPrime(x);
}
