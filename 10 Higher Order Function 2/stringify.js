// Define a function, stringify, that takes a callback function as an argument and returns a new function. 
// When the new function is called, it should invoke the callback function, coerce the value returned into a string, 
// and then return that string.

// function returnsANumber() {
//   return 100;
// }

// let newFunction = stringify(returnsANumber);
// newFunction(); // => '100'

function stringify(func) {
    return function () {
        console.log
        return func().toString(); 
    }
}