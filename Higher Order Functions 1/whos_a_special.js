// Write a function whosASpecial that takes an array of pets as an argument and returns a string confirming what you already knew:
//  all of the pets are very special! Feel free to add your own special pets to the array!

// Use .forEach in your answer.

// let specialPets = [{
//     name: 'Sadie',
//     species: 'cat'
//   }, {
//     name: 'Layla',
//     species: 'cat'
//   }, {
//     name: 'Bogie',
//     species: 'dog'
//   }
// ];

// whosASpecial(specialPets);
// // => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!

function whosASpecial(array) {
    let specialString = ""
    for (let i = 0; i < array.length; i++) {
        let pet = array[i].name;
        let type = array[i].species;
        specialString += `${pet} the ${type} is very special! `
    } return specialString.trim();
}

let specialPets = [{
    name: 'Maevis',
    species: 'cat'
  }, {
    name: 'Bella',
    species: 'dog'
  }, {
    name: 'Meera',
    species: 'dog'
  }
];

whosASpecial(specialPets);