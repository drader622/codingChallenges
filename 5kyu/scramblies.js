// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  let word = str2.split('');
  let bunch = str1.split('');
  let extracted = '';

  word.forEach(letter => {
    if (str1.includes(letter)) {
      let index = bunch.findIndex(element => element === letter);
      extracted += bunch.splice(index, 1);
    }
  });

  return extracted === str2;
}

console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjavx', 'javascript'), false);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('javscripts', 'javascript'), false);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);
console.log(scramble('commas', 'commas'), true);
console.log(scramble('sammoc', 'commas'), true)