//Test specs: https://codepen.io/FullstackAcademy/pen/OvNWPp?editors=0010

// Write a function whosASpecial that takes an array of pets as an argument and returns a string confirming what you already knew:
//  all of the pets are very special! Feel free to add your own special pets to the array!

// Use .forEach in your answer.

// whosASpecial(specialPets);
// // => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!

let specialPets = [
  {
    name: "Maevis",
    species: "cat",
  },
  {
    name: "Bella",
    species: "dog",
  },
  {
    name: "Meera",
    species: "dog",
  },
];

//solveCount = 2;

function whosASpecial(arr) {
  let specialString = "";
  arr.forEach((element) => {
    return specialString += ` ${element.name} the ${element.species} is very special!`;
  });
  return specialString.slice(1)
}

whosASpecial(specialPets);
