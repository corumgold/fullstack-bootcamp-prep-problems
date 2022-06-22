// Define a function, arrayFlattener, that accepts a 
// two-dimensional array as an argument.
// arrayFlattener should return a new, one-dimensional array.

arrayFlattener([1, [2, 3], 4]); // => [1, 2, 3, 4]

let solveCount = 3;

const arrayFlattener = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (Array.isArray(element)) {
            for (let j = 0; j < element.length; j++) {
                let nextEl = element[j];
                newArr.push(nextEl);
            }
        }
        else {
            newArr.push(element);
        }
    } return newArr;
}