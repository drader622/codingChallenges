// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let words = x.split(' ');
  let highestWord = '',
    highestScore = 0;
  words.forEach(word => {
    let score = 0;
    word.split('').forEach(letter => {
      for (let i = 0; i < alph.length; i++) {
        if (letter === alph[i]) {
          score += i + 1;
        }
      }
    });
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  });
  return highestWord
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');