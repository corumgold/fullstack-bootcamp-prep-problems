// Write a function, reverse, that accepts an array as an argument, and reverses the array.

// The behavior should mimic the behavior of the native .reverse() array method.
// However, your reverse function should accept the array to operate on as an argument,
// rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

function reverseArray(array){
    let reversedElements = [];
    let itemsCount = array.length;
    for (let i = 0; i < itemsCount; i++){
        let element = array.pop();
        reversedElements.push(element);
    }
    for (let i = 0; i < reversedElements.length; i++){
        array.push(reversedElements[i]);
    } return array;
}


let myArray = [1, 2, 3, 4];
reverse(myArray);


