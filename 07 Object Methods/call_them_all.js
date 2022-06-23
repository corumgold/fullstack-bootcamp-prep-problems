// Define a function, callThemAll, that accepts an object, object, and a value, value.

// callThemAll should call every method in the object, passing in the value as the argument with each call.

// callThemAll should return an array with all of the returned values from each method invocation. 
// The order of the elements in the returned array does not matter.

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

let solveCount = 3;

function callThemAll(object, value) {
    let calledArr = []
    for (let key in object) {
        if (typeof object[key] === "function") {
            calledArr.push(object[key](value));
        }
    } return calledArr;
}

// callThemAll(addNums, 100); // => [110, 120]

