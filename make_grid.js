// Write a function makeGrid that accepts two arguments:

// numColumns (number) - how many columns we want our grid to have
// numRows (number) - how many rows we want our grid to have

// makeGrid should return a two-dimensional array that 
// represents a grid of the given dimensions.

// makeGrid(3,4);
// [[1, 2, 3],
// [1, 2, 3],
// [1, 2, 3],
// [1, 2, 3]]

function makeGrid(numColumns, numRows) {
    let grid = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 1; j <= numColumns; j++) {
            row.push(j);
        } grid.push(row)
    } return grid;
}