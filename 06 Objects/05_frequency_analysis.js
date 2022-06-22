// Define a function frequencyAnalysis that accepts a string of lower-case letters as an argument.
// frequencyAnalysis should return an object containing the amount of times each letter appeared in the string.

// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}

let solveCount = 2;

function frequencyAnalysis(str) {
    let freqObj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!freqObj[char]) {
            freqObj[char] = 1;
        } else {
            freqObj[char]++
        }
    } return freqObj
}