// Define a function, evenAndOdd, that accepts an array.

// evenAndOdd should return a new array containing two smaller arrays. 
// The first element in the new array should be an array with all of the even numbers from the original array. 
// The second element in the new array should be an array with all of the odd numbers from the original array.

evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]

// function evenAndOdd(arr){
//     let evens = [];
//     let odds = [];
//     let evensAndOdds = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i]%2 === 0){
//             evens.push(arr[i])
//         } else {
//             odds.push(arr[i]);
//         }
//     } evensAndOdds.push(evens, odds);
//     return evensAndOdds;
//   }

function evenAndOdd(arr) {
    let newArray = [[], []]
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 === 0) {
            newArray[0].push(num);
        } else {
            newArray[1].push(num);
        }
    } return newArray
}