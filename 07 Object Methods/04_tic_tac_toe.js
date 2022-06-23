// Define an object ticTacToe.
// Follow the test specs to create a board property, move method, and a clear method.

// The board property is a grid of arrays that represents the board, where each cell is initially null.

// The move method is a method that, given a character, a row number, and a column number, 
// adds the character to the correct cell in the board.

// The clear method should reset the board to all nulls.

let ticTacToe = {
    board:
        [[null, null, null],
        [null, null, null],
        [null, null, null]],
    move: function (char, row, column) {
        if (!this.board[row][column]) {
            this.board[row][column] = char;
        }
        return this.board
    },
    clear: function () {
        this.board =
            [[null, null, null],
            [null, null, null],
            [null, null, null]]
        return this.board
    }
}



