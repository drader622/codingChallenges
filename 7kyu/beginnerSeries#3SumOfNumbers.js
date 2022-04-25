// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function getSum(a, b) {
    let sum = 0;
    if (b < a) {
        let temp = a;
        a = b;
        b = temp;
    }

    while (a <= b) {
        sum += a;
        a++;
    }
    return sum;
}

console.log(getSum(0,-1),-1);
console.log(getSum(0,1),1);