export function progressbar(percentage) {
    if(percentage < 1 || percentage > 100) {
        console.error('Error: Progress should be a number between 1 and 100.');
        return;
    }
    
    percentage = Math.min(100, Math.max(0, percentage));


    const numBars = Math.floor(percentage / 5);


    const progressBar = `[${'='.repeat(numBars)}${' '.repeat(20 - numBars)}] ${percentage}%`;

   
    console.log(progressBar);
}


export default {progressbar};
