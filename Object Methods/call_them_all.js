// Define a function, callThemAll, that accepts an object, object, and a value, value.

// callThemAll should call every method in the object, passing in the value as the argument with each call.

// callThemAll should return an array with all of the returned values from each method invocation. 
// The order of the elements in the returned array does not matter.

// let addsNums = {
//   addTen: function(num) {
//     return num + 10;
//   },

//   addTwenty: function(num) {
//     return num + 20;
//   },

//   someProperty: 'value'
// };

// callThemAll(addNums, 100); // => [110, 120]

let firstSolve
// function callThemAll(object, value) {
//     let calledFuncs = []
//     for (let key in object) {
//         if (typeof object[key] === 'function')
//             calledFuncs.push(object[key](value))
//     } return calledFuncs
// }

function callThemAll(object, value) {
    let calledFuncs = []
    for (let key in object) {
        if (typeof object[key] === 'function') {
            calledFuncs.push(object[key](value));
        } 
    } return calledFuncs;
}