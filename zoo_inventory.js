// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.
// zooInventory should return a new, flat array of strings.
// Each element in the new array should be a sentence about each of the animals in the zoo.
// Hint: nested for-loops are not necessary to complete this problem. 
// This would be a great time to use template literals, also known as string interpolation.

// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
//

function zooInventory(arr) {
    let inventory = [];
    for (let i = 0; i < arr.length; i++) {
        inventory.push(`${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}.`)
    } return inventory;
}