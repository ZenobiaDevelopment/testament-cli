import rdl from 'readline';
const l = console.log
const std = process.stdout


export function Spinner(String) {

    process.stdout.write("\x1B[?25l")

    const spinners = ['- ' + String, '\\ '+ String, '| '+ String, '/ '+ String]

    let index = 0

    setInterval(() => {
        let line = spinners[index]

        if(line == undefined) {
            index = 0
            line = spinners[index]
        }

        std.write(line)

        rdl.cursorTo(std, 0, 2)

        index = index > spinners.length ? 0 : index + 1
    }, 100)
    

}

export default {Spinner};