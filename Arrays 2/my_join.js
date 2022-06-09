// Define a function, myJoin, that accepts up to two arguments:

// array
// separator (string, optional)

// myJoin should return a string with all of the elements from the array joined together.
// The separator should separate the joined elements:

// myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
// myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"

// If separator is undefined, use ',' as the default separator.

// myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"

// If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.

// myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
// Do not use the built-in .join array method in your answer. Feel free to use it in all future problems though!

function myJoin(array, separator) {
    let string = ""
    if (separator === undefined) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === null || array[i] === undefined) {
                string += ""
            } else if (i === array.length - 1) {
                string += array[i];
            }
            else {
                string += array[i] += ","
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === null || array[i] === undefined) {
                string += separator
            }
            else if (i === array.length - 1) {
                string += array[i];
            }
            else {
                string += array[i] += separator
            }
        }
    } return string
}