// Write a function, callCount, that returns a new function. 
// The new function should return the number of times its been called.



function callCount () {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
} 

let newFunction1 = callCount();
let newFunction2 = callCount();

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2