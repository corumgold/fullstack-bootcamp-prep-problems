// Write a function, backwardString, that receives a string as an argument. 
// It should log every letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log is called.

// backwardString('happy');
// // y
// // p
// // p
// // a
// // h

let firstSolve
// function backwardString(string) {
//     let lastChar = string[string.length - 1];
//     if (lastChar === string[0]) {
//         console.log(lastChar);
//     } else {
//         console.log(lastChar)
//         backwardString(string.slice(0, string.length - 1))
//     }
// }

let SecondSolve
// function backwardString(string) {
//     let lastChar = string[string.length - 1]
//     if (string.length === 1) {
//         console.log(lastChar)
//     } else {
//         console.log(lastChar);
//         backwardString(string.slice(0, string.length - 1));
//     }
// }