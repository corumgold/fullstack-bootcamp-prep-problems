// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method.
// However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

// Do not use .splice in your function.

// solveCount = 2;

function mySplice(arr, start, delCount, toAdd) {
  debugger;
  let deletedItem = arr[start];
  let firstHalf = [];
  let secondHalf = [];
  for (let i = 0; i < start; i++) {
    firstHalf.push(arr[i]);
  }
  if (toAdd) {
    firstHalf.push(toAdd);
  }
  for (let i = start + delCount; i < arr.length; i++) {
    secondHalf.push(arr[i]);
  }
  arr = firstHalf.concat(secondHalf);
  return [deletedItem];
}

let ourStuff = ["food", "trash", "clothes"];
mySplice(ourStuff, 1, 1);

// let myArray = [1, 2, 3];
// mySplice(myArray, 1, 1, "apples"); // => [2]
// console.log(myArray); // [1,'apples', 3]
