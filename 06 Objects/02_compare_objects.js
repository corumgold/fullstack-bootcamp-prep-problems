// Define a function, compareObjects, that accepts two objects as arguments.

// compareObjects should return true if both objects have exactly the same key/value pairs.
// Otherwise, compareObjects should return false. Assume the objects are not nested.

// compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false

let solveCount = 3;

function compareObjects(arg1, arg2) {
    for (let key in arg1) {
        arg1[key];
        if (arg1[key] !== arg2[key]) return false;
    }
    for (let key in arg2) {
        arg1[key];
        if (arg1[key] !== arg2[key]) return false;
    } 
    return true;
}