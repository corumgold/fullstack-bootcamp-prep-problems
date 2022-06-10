// Define a function, chainReaction, that accepts 2 arguments:

// 1) a starting value

// 2) an array of functions

// chainReaction should pass the starting value into the first function in the array. 
// It should pass the value returned by the first function as an argument into the second function, 
// and so on until every function in the array is called.

// chainReaction should return the final value returned by the final function in the array.

// function addTen(num) {
//   return num + 10;
// }

// function subtractFive(num) {
//   return num - 5;
// }

// function multiplyFive(num) {
//   return num * 5;
// }

// chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
// chainReaction(0, [subtractFive, multiplyFive, addTen]); // => -15

function chainReaction(initValue, funcsArray) { 
    let total = initValue;
    funcsArray.forEach(func => {
        total = func(total);
    }); 
    return total;
}
chainReaction(0, [addTen, subtractFive, multiplyFive]);

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}