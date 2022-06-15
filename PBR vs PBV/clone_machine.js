// Write a function cloneMachine, that, given an argument animal (represented as an object), returns a clone of animal.

// The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

// cloneMachine should also push the name of the clone to the parent's offspring array.

// let dolly = {
//     name: 'Dolly',
//     species: 'sheep',
//     offspring: []
// }

let dollyClone = cloneMachine(dolly);

// console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
// console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}

let firstSolve
// function cloneMachine(animalObj) {
//     let clone = {
//         name: `${animalObj.name}Clone`,
//         species: animalObj.species,
//         offspring: []
//     }
//     animalObj.offspring.push(`${animalObj.name}Clone`)
//     return clone;
// }

let secondSolve
// function cloneMachine(animalObj) {
//     let clone = {
//         name: `${animalObj.name}Clone`,
//         species: animalObj.species,
//         offspring: []
//     }
//     animalObj.offspring.push(clone.name);
//     return clone;
// }

