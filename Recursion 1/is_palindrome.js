// A palindrome is a word that is spelled the same forwards and backwards. 
// For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome. 
// Return true if the string is a palindrome; otherwise, return false.

function isPalindrome(str) {
    debugger
    let smallStr = str.toLowerCase();
    let firstChar = smallStr[0];
    let lastChar = smallStr[smallStr.length - 1]

    if (smallStr.length === 1 || (smallStr.length === 2 && firstChar === lastChar)) return;

    if (firstChar === lastChar) {
        let choppedStr = smallStr.slice(1, smallStr.length - 1);
        isPalindrome(choppedStr);
    } else {
        return false;
    }
    return true;
}


isPalindrome('Kayak'); // => true
// isPalindrome('NEVERODDOREVEN'); // => true
// isPalindrome('Tacocat'); // => true
// isPalindrome('SELFLESS'); // => false