// Define an object ticTacToe.
// Follow the test specs to create a board property, move method, and a clear method.

// The board property is a grid of arrays that represents the board, where each cell is initially null.

// The move method is a method that, given a character, a row number, and a column number, 
// adds the character to the correct cell in the board.

// The clear method should reset the board to all nulls.

let solveCount = 1;

let ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    move: (char, row, col) => {
        let space = this.board[row][col];
        if (!space) {
            space = char;
        };
        return this.board;
    },
    clear: () => {
        this.board = [[null, null, null],
        [null, null, null],
        [null, null, null]];
        return this.board;
    }
}



