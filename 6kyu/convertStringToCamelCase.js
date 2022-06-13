// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    let delim;
    let arr = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '-' || str.charAt(i) === '_') {
            arr.push(word);
            word = '';
        } else { word += str.charAt(i); }
    }
    arr.push(word);
    return arr.map((word, i) => {
        if (i > 0) {
            word = word[0].toUpperCase() + word.slice(1);
            return word;
        } else { return word; }
    }).join('');
}

console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase("A-B-C"), "ABC")