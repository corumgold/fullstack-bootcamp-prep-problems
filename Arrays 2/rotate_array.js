// Define a function, rotateArray, that accepts two arguments:
// originalArray (array)
// rotateNum (number)

// If rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum `of indices.
// rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]

// If rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.
// rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]

// If rotateNum is 0, rotate should return a copy of the original array without rotating it.
// rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]

// You can assume the absolute value of rotateNum will be less than the length of the original array.

function rotateArray(originalArray, rotateNum) {
    debugger
    let rotatedArray = []
    if (rotateNum === 0) {
        return originalArray;
    } else if (rotateNum > 0) {
        //start with originalArray[originalArray.length-rotateNum]
        for (let i = originalArray.length - rotateNum; i < originalArray.length; i++) {
            let element = originalArray[i]
            rotatedArray.push(element)
        }
        for (let i = 0; i < originalArray.length - rotateNum; i++) {
            rotatedArray.push(originalArray[i]);
        }
    } else {
        for (let i = 0 - rotateNum; i < originalArray.length; i++) {
            let element = originalArray[i]
            rotatedArray.push(element)
        } for (let i = 0; rotatedArray.length < originalArray.length; i++){
            rotatedArray.push(originalArray[i]);
        }
    } return rotatedArray;
}

rotateArray([1, 2, 3, 4, 5], -1)
