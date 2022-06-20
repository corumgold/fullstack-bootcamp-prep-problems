// A palindrome is a word that is spelled the same forwards and backwards. 
// For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome. 
// Return true if the string is a palindrome; otherwise, return false. (ignore case)

let solveCount = 2;

const isPalindrome = (str) => {
    let smallStr = str.toLowerCase();
    if (str.length === 0 || str.length === 1) {
        return true;
    }

    if (smallStr[0] === smallStr[smallStr.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    } else {
        return false;
    }
}


isPalindrome('Kayak'); // => true
// isPalindrome('NEVERODDOREVEN'); // => true
// isPalindrome('Tacocat'); // => true
// isPalindrome('SELFLESS'); // => false