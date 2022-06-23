// Define a function, dogBreeder, that accepts up to two optional arguments:

// name (string)
// age (number)

// dogBreeder should return an object that represents a new dog! 
// If the user doesn't define a name, assume the dog's name is 'Steve'. 
// If the user doesn't define the dog's age, assume the dog's age is 0.

let solveCount = 2;

function dogBreeder(name = "Steve", age = 0) {
    if (typeof name === "number") {
        age = name;
        name = "Steve"
    }
    return {
        'name': name,
        'age': age
    }
}

// dogBreeder('Sam', 12) // => {name: 'Sam', age: 12}

dogBreeder(15) // => {name:'Steve', age: 15}