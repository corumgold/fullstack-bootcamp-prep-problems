//Test specs https://codepen.io/FullstackAcademy/pen/OvNbeW?editors=0010

// Define a function finderFunction that accepts an array and a callback function as arguments.
// finderFunction should pass each element from the array into the callback function.

// If the callback returns true for any of the elements in the array, return the index of the current element.
// If the callback never returns true, return -1;

//solveCount = 2;

function finderFunction(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return i;
  }
  return -1;
}

console.log(finderFunction(numbers, isEven)); // 3
console.log(finderFunction(odds, isEven)); // -1
