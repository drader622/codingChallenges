// Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

function doneOrNot(board) {
    let box = [],
        valid = true,
        prevCol = 0,
        colEnd = prevCol + 3;
    //Check Boxes
    while (colEnd <= 9) {
        let prevRow = 0;
        let rowEnd = prevRow + 3;
        while (rowEnd <= 9) {
            for (let i = prevRow; i < rowEnd; i++) {
                for (let j = prevCol; j < colEnd; j++) {
                    box.push(board[i][j]);
                }
            }
            if (box.sort().join('') !== '123456789') valid = false;
            box = [];
            prevRow += 3;
            rowEnd = prevRow + 3;
        }
        prevCol += 3
        colEnd += 3;
    }

    //Check cols
    let col = 0;
    while (col < board.length) {
        box = [];
        for (let i = 0; i < board.length; i++) {
            box.push(board[i][col]);
        }
        if (box.sort().join('') !== '123456789') valid = false;
        col++;
    }

    //Check rows
    let row = 0;
    while (row < board.length) {
        box = [];
        for (let i = 0; i < board.length; i++) {
            box.push(board[row][i]);
        }
        if (box.sort().join('') !== '123456789') valid = false;
        row++;
    }

    return (valid) ? 'Finished!' : 'Try again!';
}

console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]), 'Finished!');
console.log(doneOrNot(
    [[5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]
), "Try again!");