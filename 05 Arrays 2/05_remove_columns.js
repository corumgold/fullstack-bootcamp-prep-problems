// Write a function removeColumns that accepts two arguments:

// originalGrid (two-dimensional array)
// numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.

// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */

function removeColumns(originalGrid, numColumns) {
    let numColToKeep = originalGrid[0].length - numColumns;
    let newArray = [];
    for (let i = 0; i < originalGrid.length; i++) {
        let row = originalGrid[i]
        let newRow = [];
        for (let j = 0; j < numColToKeep; j++) {
            newRow.push(row[j])
        } newArray.push(newRow);
    } return newArray;
}
