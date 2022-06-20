// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method.
// However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

// Do not use .splice in your function.

// let myArray = [1, 2, 3];

// mySplice(myArray, 1, 1, 'apples')) // => [2]

// console.log(myArray)    // [1,'apples', 3]

function mySplice(array, start, deleteCount, itemToAdd) {
    let splicedArray = [];
    let item = itemToAdd;
    let itemsDeleted = 0
    for (let i = 0; i < array.length; i++) {
        if (start === undefined && deleteCount === undefined && itemToAdd === undefined) {
            splicedArray.push(array[i]);
        } else if (deleteCount === undefined && itemToAdd === undefined) {
            if (i >= start) {
                splicedArray.push(array[i])
            }
        } else {
            if (i < start - 1) {
                continue;
            }
            else if (i >= start && itemsDeleted < deleteCount) {
                itemsDeleted++;
                continue
            } else if (i >= start && item !== undefined) {
                splicedArray.push(itemToAdd);
                item = undefined;
                splicedArray.push(array[i])
            } else {
                splicedArray.push(array[i]);
            }
        }
    } let array = splicedArray;
    return array;;
}

//MODIFY THE ORIGINAL ARRAY!
// function mySplice(array, start, deleteCount, itemToAdd) {
//     let deleted = 0
//     if (start !== undefined) {
//         for (let i = 0; i < array.length; i++) {
//             if (i === start) {
//                 array.shift(array[2]);
//             }
//         }
//     } return array;
// }
mySplice(['food', 'trash', 'clothes'], 1, 1);
