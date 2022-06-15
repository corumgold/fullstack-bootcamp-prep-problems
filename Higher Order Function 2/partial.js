// Write a function, partial, that accepts a callback function and another value (let's call it argA) as arguments. 
// partial should return a new function. When invoked, the new function will:

// Accept its own argument (let's call it argB)
// Call the callback, passing in argA as the first argument and argB as the second argument
// Return the value returned by the callback
// function summer (a, b) {
//   return a + b
// };

// let sumFive = partial(summer, 5);
// sumFive(10) // => 15;

let partial = function (func, argA) {
    return function (argB) {
        return func(argA, argB);
    }
}

function summer(a, b) {
    return a + b
};

let sumFive = partial(summer, 5);
sumFive(10) // => 15;