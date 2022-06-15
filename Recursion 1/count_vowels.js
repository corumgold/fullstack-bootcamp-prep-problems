// Write a function, countVowels, that accepts a string as an argument and returns the number of
// vowels in that string. Use recursion.

function countVowels(string) {
    debugger;
    string.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (!vowels.includes(string)) {
        return 0;
    }
}


countVowels('x'); // => 9