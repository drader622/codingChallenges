// If we were to set up a Tic - Tac - Toe game, we would want to know whether the board's current state is solved, wouldn't we ? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
// [0, 1, 2],
// [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet(there are empty spots),
//     1 if "X" won,
//         2 if "O" won,
//             0 if it's a cat's game(i.e.a draw).
// You may assume that the board passed in is valid in the context of a game of Tic - Tac - Toe.

function isSolved(board) {
    let column = 0,
        top = board[0],
        middle = board[1],
        bottom = board[2],
        win;

    while (!win && top[column]) {
        if (top[column] === middle[column] && top[column] === bottom[column]) win = top[column];
        if (column === 0) {
            if (top[column] === middle[column + 1] && top[column] === bottom[column + 2]) win = top[column];
        }
        if (column === 2) {
            if (top[column] === middle[column - 1] && top[column] === bottom[column - 2]) win = top[column];
        }
        column++;
    }
    if (!win) {
        column = 0;
        if (top[column] === top[column + 1] && top[column] === top[column + 2] && top[column] !== 0) win = top[column];
        else if (middle[column] === middle[column + 1] && middle[column] === middle[column + 2] && middle[column] !== 0) win = middle[column];
        else if (bottom[column] === bottom[column + 1] && bottom[column] === bottom[column + 2] && bottom[column] !== 0) win = bottom[column];
        else if (top.includes(0) || middle.includes(0) || bottom.includes(0)) win = -1;
    }

    return (win) ? win : 0;
}
console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]]), -1)
console.log(isSolved([[1, 1, 1], [0, 2, 2], [0, 0, 0]]), 1)
console.log(isSolved([[1, 2, 0], [0, 1, 2], [0, 0, 1]]), 1)
console.log(isSolved([[0, 0, 2], [0, 0, 0], [1, 0, 1]]), -1)