// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let newStr = '';
  s1.split('').forEach(letter => {
      if (!newStr.includes(letter)) {
          newStr += letter;
      }
  })
  s2.split('').forEach(letter => {
    if (!newStr.includes(letter)) {
        newStr += letter;
    }
  });
  
  return newStr.split('').sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");