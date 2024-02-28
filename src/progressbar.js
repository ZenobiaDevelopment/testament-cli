export function progressbar(percentage) {
    let progress;
    progress = Math.min(100, Math.max(0, percentage));


    const numBars = Math.floor(percentage / 5);


    const progressBar = `[${'='.repeat(numBars)}${' '.repeat(20 - numBars)}] ${percentage}%`;

   
    console.log(progressBar);
}


export default {progressbar};
