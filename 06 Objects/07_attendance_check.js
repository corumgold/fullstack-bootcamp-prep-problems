// Define a function, attendanceCheck, that accepts a string argument corresponding to a day of the week.

// Using the globally-defined classRoom array, attendanceCheck should return a new array with only the 
// names of the students present on the inputted day of the week.

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']

let classRoom = [
    {
        "Marnie": [
            { "Monday": true },
            { "Tuesday": true },
            { "Wednesday": true },
            { "Thursday": true },
            { "Friday": true }
        ]
    },
    {
        "Lena": [
            { "Monday": false },
            { "Tuesday": false },
            { "Wednesday": true },
            { "Thursday": false },
            { "Friday": true }
        ]
    },
    {
        "Shoshanna": [
            { "Monday": true },
            { "Tuesday": true },
            { "Wednesday": false },
            { "Thursday": true },
            { "Friday": false }
        ]
    },
    {
        "Jessa": [
            { "Monday": false },
            { "Tuesday": false },
            { "Wednesday": false },
            { "Thursday": false },
            { "Friday": true }
        ]
    }
];

let solveCount = 3;

function attendanceCheck(day) {
    let attArr = [];
    for (let i = 0; i < classRoom.length; i++) {
        let studentObj = classRoom[i];
        for (let name in studentObj) {
            let weekArr = studentObj[name];
            for (let j = 0; j < weekArr.length; j++) {
                let dayObj = weekArr[j];
                if (dayObj[day]) {
                    attArr.push(name);
                    break;
                }
            }
        }
    } return attArr;
}

attendanceCheck("Tuesday")

