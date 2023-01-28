export function clock(format) {
    if(format === '24') {
        function update(i) {
            if (i < 10) {
                return "0" + i;
            }
            else {
                return i;
            }
        }

        function current() {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            hours = update(hours);
            minutes = update(minutes);
            seconds = update(seconds);
            process.stdout.write(hours + " : " + minutes + " : " + seconds + `\r`);
            setTimeout(() => {
                current();
            }, 1000);
        }

        current();

    } else if(format === '12') {
        return;
    }
}


export default {clock};