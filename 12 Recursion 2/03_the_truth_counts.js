// Write a function, theTruthCounts, that accepts a multi-dimensional array of values as argument.
// theTruthCounts should return the count of all truthy values inside the multidimensional array.

let solveCount = 2

const theTruthCounts = (arr) => {
    debugger
    let truthCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (Array.isArray(element)) {
            truthCounter += theTruthCounts(element);
        }
        else if (element) truthCounter++;
    } return truthCounter;
}

theTruthCounts([[0], [true], [10]])