// Write a function, veryOddMutant, that accepts an array of numbers as an argument.
// The function should mutate the given array by replacing every even number in the array with the string 'normie'.

// veryOddMutant should return a count of the number of even numbers it replaced.

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countReplaced = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countReplaced:', countReplaced);
// // 4 (because 4 even numbers were replaced with 'normie')

function veryOddMutant(numArray) {
    countReplaced = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0){
            numArray[i] = 'normie';
            countReplaced++
        }
    } return countReplaced;
}