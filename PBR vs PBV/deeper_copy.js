// Write a function, deeperCopy, that, unlike.slice, will deeply copy a two - dimensional array.

// let myArray = [1, [2, 3]];

// let copy = deeperCopy(myArray);
// copy[1].push(4);

// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray); // [1, [2, 3, 4]]

function deeperCopy(array) {
    let copy = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (typeof element !== 'object') {
            copy.push(element)
        } else {
            let arrayception = []
            for (let j = 0; j < element.length; j++){
                arrayception.push(element[i]);
                copy.push(arrayception);
            }
        }
    } return copy;
}