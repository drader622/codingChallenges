// Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

// Worked Example
// 2520 ➞ 72

// # The first and last digits are 2 and 0.
// # 2 and 0 form 20.
// # The second digit is 5 and the second to last digit is 2.
// # 5 and 2 form 52.

// # 20 + 52 = 72
// Examples
// 121 ➞ 13
// # 11 + 2

// 1039 ➞ 22
// # 19 + 3

// 22225555 ➞ 100
// # 25 + 25 + 25 + 25

function closingInSum(n) {
    let arr = n.toString().split('');
    let first,
        last,
        total = 0;

    while (arr.length > 1) {
        first = arr.shift();
        last = arr.pop();
        total += Number(first + last)
    }

    if (arr.length > 0) {
        total += Number(arr[0])
    }

    return total;
}

console.log(closingInSum(121n), 13);
console.log(closingInSum(1039n), 22);
console.log(closingInSum(22225555n), 100);
console.log(closingInSum(2520n), 72);
console.log(closingInSum(5332824166496569n), 331);
console.log(closingInSum(1979672314137318116n), 485);
console.log(closingInSum(1795459644013947776n), 548);
console.log(closingInSum(2801980378842185820n), 426);
console.log(closingInSum(3440584288422776554n), 430);
console.log(closingInSum(1985124000275401986n), 342);