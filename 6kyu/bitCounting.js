// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

//     Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
    let binary = "",
        bitCount = 0;
    while (n > 0) {
        if (n % 2 == 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        n = Math.floor(n / 2);
    }
    for (let i = 0; i < binary.length; i++) {
        if (binary.charAt(i) === '1') {
            bitCount++;
        }
    }

    return bitCount;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);