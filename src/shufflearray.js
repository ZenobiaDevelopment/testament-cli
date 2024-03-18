export function shufflearray(array) {

    if (!Array.isArray(array)) {
        console.error('Error: Input should be an array.');
        return;
    }

    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
    
}


export default {shufflearray};
