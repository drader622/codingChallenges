// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"

function gimmeTheLetters(sp) {
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let upper = /[A-Z]/.test(sp.charAt(0));

    sp = sp.toLowerCase();

    let first = str.indexOf(sp.charAt(0));
    let last = str.indexOf(sp.charAt(2)) + 1

    let substr = str.substring(first, last);

    return upper ? substr.toUpperCase() : substr;
}

console.log(gimmeTheLetters('J-J'), 'J')
console.log(gimmeTheLetters('Z-Z'), 'Z')
console.log(gimmeTheLetters('a-a'), 'a')
console.log(gimmeTheLetters('a-b'), 'ab')
console.log(gimmeTheLetters('y-z'), 'yz')
console.log(gimmeTheLetters('H-I'), 'HI')
console.log(gimmeTheLetters('g-i'), 'ghi')
console.log(gimmeTheLetters('W-Y'), 'WXY')
console.log(gimmeTheLetters('Q-Z'), 'QRSTUVWXYZ')
console.log(gimmeTheLetters('F-O'), 'FGHIJKLMNO')
console.log(gimmeTheLetters('C-R'), 'CDEFGHIJKLMNOPQR')
console.log(gimmeTheLetters('h-o'), 'hijklmno')
console.log(gimmeTheLetters('e-k'), 'efghijk')
console.log(gimmeTheLetters('a-q'), 'abcdefghijklmnopq')
console.log(gimmeTheLetters('a-z'), 'abcdefghijklmnopqrstuvwxyz')
console.log(gimmeTheLetters('A-Z'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')