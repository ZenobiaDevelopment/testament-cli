export function red(String) {
    console.log('\x1b[31m'+ String +'\x1b[39m');
}

export default {red};