// Define a function, arrayFlattener, that accepts a 
// two-dimensional array as an argument.
// arrayFlattener should return a new, one-dimensional array.

// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]

function arrayFlattener(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                newArray.push(element[j]);
            }
        } else {
            newArray.push(element)
        }
    } return newArray;
}