// Define a function, myJoin, that accepts up to two arguments:

// array
// separator (string, optional)

// myJoin should return a string with all of the elements from the array joined together.
// The separator should separate the joined elements.

// If separator is undefined, use ',' as the default separator.

// If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.

// myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
// Do not use the built-in .join array method in your answer. Feel free to use it in all future problems though!

let solveCount = 2;

function myJoin(arr, separator) {
    let string = "";
    if (!separator) {
        separator = ",";
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!element) {
            element = ""
        }
        string += `${separator}${element}`
    }
    return string.slice(separator.length);
}

// myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
// myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
// myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"