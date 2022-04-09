// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info){
  let bulletsNeeded = info[1] * 3;
  let mag = 0;
  switch (info[0]) {
      case 'PT92':
        mag = 17;
        break;
      case 'M4A1':
        mag = 30;
        break;
      case 'M16A2':
        mag = 30;
        break;
      case 'PSG1':
        mag = 5;
        break;
      default:
        mag = 1;
  }
  let magsNeeded = Math.floor(bulletsNeeded / mag);
  magsNeeded = bulletsNeeded % mag === 0 ? magsNeeded : magsNeeded + 1;
  return magsNeeded;
}
console.log(magNumber(["PT92", 6]), 2)
console.log(magNumber(["M4A1", 8]), 1)
console.log(magNumber(["M16A2", 19]), 2)
console.log(magNumber(["PSG1", 31]), 19)
console.log(magNumber(["PT92", 19]), 4)