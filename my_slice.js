// Define a function, mySlice, that accepts up to three arguments:

// originalArray (array)
// startIdx (number, optional)
// endIdx (number, optional)

// mySlice should return a copy of the original array. The copy should include all of the elements from originalArray, 
// starting at and including the startIdx, up through and excluding the endIdx.
// mySlice([1, 2, 3], 1, 2) // => [2]

// If endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.
// mySlice([1, 2, 3], 1) // => [2, 3]

// If startIdx is undefined, return a copy of the original array.
// mySlice([1, 2, 3]) // => [1, 2, 3]

// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.
// mySlice([1, 2, 3], -1) // => [3]

// Do not use the built-in .slice array method in your answer. Feel free to use it in all future problems though!

function mySlice(originalArray, startIdx, endIdx) {
    slicedArray = []
    if (startIdx === undefined && endIdx === undefined) {
        return originalArray;
    } else if (startIdx < 0) {
        for (let i = 0; i < originalArray.length; i++) {
            if (i >= (originalArray.length + startIdx)) {
                slicedArray.push(originalArray[i]);
            }
        }
    } else if (endIdx < 0){
        for (let i = 0; i < originalArray.length; i++) {
            if (i >= startIdx && i < endIdx + originalArray.length) {
                slicedArray.push(originalArray[i]);
            }
        }
    } else if (endIdx === undefined) {
        for (let i = 0; i < originalArray.length; i++) {
            if (i >= startIdx) {
                slicedArray.push(originalArray[i]);
            }
        }
    } else if (startIdx === undefined) {
        for (let i = 0; i < originalArray.length; i++) {
            if (i < endIdx) {
                slicedArray.push(originalArray[i]);
            }
        }
    } else {
        for (let i = 0; i < originalArray.length; i++) {
            if (i >= startIdx && i < endIdx) {
                slicedArray.push(originalArray[i]);
            }
        }
    } return slicedArray
}
