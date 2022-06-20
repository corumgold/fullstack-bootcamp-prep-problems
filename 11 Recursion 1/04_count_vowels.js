// Write a function, countVowels, that accepts a string as an argument and returns the number of
// vowels in that string. Use recursion.

let solveCount = 3;

const countVowels = function (str) {
    debugger;
    const VOWELS = "aeiouAEIOU";
    let firstChar = str[0];
    if (str.length === 0) {
        return 0;
    }
    if (VOWELS.indexOf(firstChar) !== -1) {
        return 1 + countVowels(str.slice(1));
    }
    else {
        return countVowels(str.slice(1));
    }
}


countVowels("fortnight")