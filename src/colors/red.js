export function red(String) {
    return '\x1b[31m' + String + '\x1b[39m';
}

export default {red};