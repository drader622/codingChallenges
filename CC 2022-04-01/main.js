// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// P:
// split string into an array
// return capital letter at 0 index of each array element
// Ensure capitalization 

function abbrevName(name){
  let arr = name.split(' ');
  return `${arr[0].charAt(0).toUpperCase()}.${arr[1].charAt(0).toUpperCase()}`;
}