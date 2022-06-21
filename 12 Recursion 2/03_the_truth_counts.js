// Write a function, theTruthCounts, that accepts a multi-dimensional array of values as argument.
// theTruthCounts should return the count of all truthy values inside the multidimensional array.

let solveCount = 1

const theTruthCounts = (arr) => {
    //create a counter for the truths
    let truthCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
    //if the element is an array, loop through that
        if (Array.isArray(element)) {
    //add the return counter to the main counter
           truthCounter += theTruthCounts(element);
        }
    //if the element is just a value, see if it's truthy and if so, add it to the truth counter;
        else if (element) {
            truthCounter++
        }
    } return truthCounter
}

theTruthCounts([[0], [true], [10]])