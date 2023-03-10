export function gray(String) {
    return '\x1b[90m' + String + '\x1b[39m';
}

export default {gray};