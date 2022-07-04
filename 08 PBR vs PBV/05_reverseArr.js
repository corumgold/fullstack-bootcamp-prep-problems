// Write a function, reverse, that accepts an array as an argument, and reverses the array.

// The behavior should mimic the behavior of the native .reverse() array method.
// However, your reverse function should accept the array to operate on as an argument,
// rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

//solveCount = 2;

function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

let myArray = [1, 2, 3, 4];
reverseArray(myArray);
