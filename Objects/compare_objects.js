// Define a function, compareObjects, that accepts two objects as arguments.

// compareObjects should return true if both objects have exactly the same key/value pairs.
// Otherwise, compareObjects should return false. Assume the objects are not nested.

// compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
let firstSolve
// function compareObjects(obj1, obj2) {
//     stringOne = ''
//     stringTwo = ''
//     for (key in obj1) {
//         stringOne += `${key} is ${obj1[key]}`;
//     }
//     for (key in obj2) {
//         stringTwo += `${key} is ${obj2[key]}`;
//     } if (stringOne === stringTwo) {
//         return true;
//     } else {
//         return false;
//     }
// } 

let secondSolve
// function compareObjects(obj1, obj2) {
//     for (let key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         } else if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//             return false;
//         }
//     } return true;
// }