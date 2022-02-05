export function Error(String) {
    console.log("\x1b[90m[ERROR] " + "\x1b[31m" + String + "\x1b[39m")
}

export default {Error};