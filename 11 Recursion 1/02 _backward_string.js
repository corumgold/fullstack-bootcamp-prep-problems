// Write a function, backwardString, that receives a string as an argument. 
// It should log every letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log is called.

// backwardString('happy');
// // y
// // p
// // p
// // a
// // h

let solveCount = 3

function backwardString(str) {
    let lastChar = str[str.length - 1];
    if (str.length === 1) console.log(lastChar);
    else {
        console.log(lastChar);
        backwardString(str.slice(0, str.length - 1));
    }
}