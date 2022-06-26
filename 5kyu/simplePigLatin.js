// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  let invalidChars = ['!', '?']
  return str.split(' ').map(word => {
    if (!invalidChars.includes(word)) {
      word = word.split('')
      let first = word.shift()
      first += 'ay';
      word.push(first);
      return word.join('');
    } else {
      return word;
    }
  }).join(' ');
}

console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay');