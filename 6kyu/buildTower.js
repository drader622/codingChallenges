// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  let rowLength = nFloors * 2 - 1;
  let difference = 0;
  let str = '',
      arr = [];
  while (nFloors > 0) {
    let charCount = rowLength - difference;
    str = '';
    while (charCount > 0) {
      str += '*'
      charCount--;
    }
    nFloors--;
    difference += 2;
    while (str.length < rowLength) {
      str = ` ${str} `;
    }
    arr.push(str);
  }
  return arr.reverse();
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);