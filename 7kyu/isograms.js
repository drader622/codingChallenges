// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

function isIsogram(str) {
    let matched = false;
    str.split('').forEach((letter, index) => {
        let j = 0;
        for (let i = 0; i < str.length; i++) {
            if (letter === str[i].toLowerCase() && index !== i) {
                matched = true;
                break;
            }
        }
    });
    return matched ? false : true;
}


console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);