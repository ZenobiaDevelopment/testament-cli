export function black(String) {
    return '\x1b[30m' + String + '\x1b[39m';
}

export default {black};