// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
    let outlierNum = 0,
        even = 0,
        odd = 0;
    integers.forEach(x => {
        (x % 2 === 0) ? even++ : odd++
    });
    if (even > odd) {
        integers.forEach(num => {
            if (num % 2 !== 0) {
                outlierNum = num;
            }
        });
    } else {
        integers.forEach(num => {
            if (num % 2 === 0) {
                outlierNum = num;
            }
        });
    }
    return outlierNum;
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);