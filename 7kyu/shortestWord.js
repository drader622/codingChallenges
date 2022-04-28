// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let smallest;
  s.split(' ').forEach((word, index) => {
    if (index === 0) {
      smallest = word.length;
    } else if (word.length < smallest) {
        smallest = word.length;
    }
  });
  return smallest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);