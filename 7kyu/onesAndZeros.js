const binaryArrayToNumber = arr => {
    let posValue = 8,
        total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) total += posValue;
        posValue /= 2;
    }
    return total;

};

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);