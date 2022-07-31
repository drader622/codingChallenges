// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
  if (isNaN(strng.charAt(strng.length - 1)) || strng === ''){
    strng += '1';
  } else {
    let num = strng.split('').filter(char => (!isNaN(char)) ? char : "");
    let newNum = (Number(num.join('')) + 1).toString();
    if (newNum.length < num.length) {
      newNum = newNum.padStart(num.length, '0');
    }
    strng = strng.split('');
    strng.splice(-num.length, num.length, newNum);
    strng = strng.join('');
  }
  return strng;
}

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");
console.log(incrementString("foobar00999"), "foobar01000")