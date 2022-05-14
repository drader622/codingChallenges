//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let startNum = 1,
        x = 2,
        rows = n;
    let numbers = [];
    while (rows > 1) {
        startNum += x;
        x += 2;
        rows--;
    }

    while (n !== 0) {
        numbers.push(startNum);
        startNum += 2;
        n--;
    }
    return numbers.reduce((num, sum) => sum + num, 0);
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(42), 74088);