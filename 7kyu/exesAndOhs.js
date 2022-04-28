// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let x = 0,
      o = 0;
    str.split('').forEach(letter => {
      if (letter.toLowerCase() === 'x') {
        x++;
      } else if (letter.toLowerCase() === 'o') {
        o++;
      }
    })
  
  return x === o;
}

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);
console.log(XO("zpzpzpp"),true);