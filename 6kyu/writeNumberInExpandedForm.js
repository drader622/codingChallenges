// You will be given a number and you will need to return it as a string in Expanded Form.For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let arr = [];
    let temp = num.toString();
    for (let i = temp.length - 1; i >= 0; i--) {
        let last = temp.charAt(i);
        if (Number(last) > 0) {
            arr.push(last + temp.slice(i + 1))
            let zeros = temp.length - i;
            let zeroStr = '';
            while (zeros > 0) {
                zeroStr += '0';
                zeros--;
            }
            temp = temp.slice(0, i) + zeroStr;
        }
    }
    return arr.reverse().join(' + ');
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
console.log(expandedForm(420370022), '400000000 + 20000000 + 300000 + 70000 + 20 + 2');