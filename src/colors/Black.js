export function black(String) {
    console.log('\x1b[30m'+ String +'\x1b[39m');
}

export default {black};