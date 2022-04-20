// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  let arr = s.split('');
  if ((arr.length % 2) === 0) {
    return `${arr[(Math.floor(arr.length / 2) -1)]}${arr[(Math.floor(arr.length / 2))]}`;
  } else {
    return arr[(Math.floor(arr.length / 2))];  
  }
  
  return arr;
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");