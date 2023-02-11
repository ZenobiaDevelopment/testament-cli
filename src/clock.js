export function clock(format) {
    if(format === '24') {
        function update_24(i) {
            if (i < 10) {
                return "0" + i;
            }
            else {
                return i;
            }
        }

        function current() {
            let date_24 = new Date();

            let hours = date_24.getHours();
            let minutes = date_24.getMinutes();
            let seconds = date_24.getSeconds();
            hours = update_24(hours);
            minutes = update_24(minutes);
            seconds = update_24(seconds);
            process.stdout.write(hours + " : " + minutes + " : " + seconds + `\r`);
            setTimeout(() => {
                current();
            }, 1000);
        }

        current();

    } else if(format === '12') {
        function update_12(k) {
            if (k < 10) {
                return "0" + k;
            } else {
                return k;
            }
        }
        
        function currentTime() {
            let date_12 = new Date();
            let hours = date_12.getHours();
            let minutes = date_12.getMinutes();
            let seconds = date_12.getSeconds();
            let midday = "AM";
            midday = (hours >= 12) ? "PM" : "AM";
            hours = (hours == 0) ? 12 : ((hours > 12) ? (hours - 12): hours);
            hours = update_12(hours);
            minutes = update_12(minutes);
            seconds = update_12(seconds);
            process.stdout.write(hours + " : " + minutes + " : " + seconds + " " + midday + `\r`);
            setTimeout(() => {
                currentTime()
            }, 1000);
        }

        

        currentTime();
    }
}


export default {clock};