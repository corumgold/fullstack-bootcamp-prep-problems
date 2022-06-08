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

function attendanceCheck(day) {
    debugger
    let presentStudents = [];
    for (let i = 0; i < classRoom.length; i++) {
        let studAttendance = classRoom[i];
        let studentName
        for (let key in studAttendance) {
            if (typeof key === 'string') {
                studentName = key;
            }
        }
        let studentSchedule = studAttendance[studentName];
        for (let i = 0; i < studentSchedule.length; i++) {
            let dayChecked = studentSchedule[i];
            for (let key in dayChecked) {
                if (key === day) {
                    if (dayChecked[key] === true){
                        presentStudents.push(studentName);
                    }
                }
            }
        }
    } return presentStudents;
} attendanceCheck('Monday')