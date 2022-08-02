// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
  let newStr = str.trim().split(' ').map(word => {
    return word = word.charAt(0).toUpperCase() + word.slice(1);
  });

  if (str.trim() !== "") {
    newStr.unshift('#');
  } else {
    return false;
  }

  return (newStr.join('').length <= 140) ? newStr.join('') : false;
}

console.log(generateHashtag("             "), false);
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag");
console.log(generateHashtag("Codewars"), "#Codewars");
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice");