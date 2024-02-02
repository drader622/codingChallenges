// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// n <= 1000.

function squareUp(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= 1; j--) {
            if (j === i) {
                arr.push(j);
                while (j > 1) {
                    arr.push(j - 1);
                    j--;
                }
            } else {
                arr.push(0);
            }
        }

    }
    return arr 
}

console.log(squareUp(4), [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
console.log(squareUp(9), [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(squareUp(1), [1]);