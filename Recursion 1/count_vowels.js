// Write a function, countVowels, that accepts a string as an argument and returns the number of
// vowels in that string. Use recursion.

let firstSolve
function countVowels(string) {
    debugger;
    let lastChar = string[string.length - 1];

    if (string.length === 0) {
        return 0;
    }

    return ( isAVowel(lastChar) ? 1 : 0 ) + countVowels(string.slice(0, string.length - 1));
};

function isAVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}



countVowels('');
countVowels('a'); // '' =>  0 'a' => 1
countVowels('ab'); // 1 + 0 = 1
countVowels('aba'); // 1 + 1