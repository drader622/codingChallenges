// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// P = string containing only (), {}, []
// R = true or false
// E = () : true
//     [(] : false
// P = split string. Add for each left brace, subtract for each right brace. Return true if 0 at the end or false if greater than 0

function validBraces(braces) {
    let valid;
    braces = braces.split('');

    while (braces.length % 2 === 0 && braces.length > 0 && valid !== false) {
        let firstChar = braces[0];
        for (let i = 1; i < braces.length + 1; i++) {
            if (i === braces.length) valid = false;
            if (firstChar === '(' || firstChar === '[' || firstChar === '{') {
                let remove = false;
                switch (firstChar) {
                    case '(':
                        (braces[i] === ')') ? remove = true : firstChar = braces[i];
                        break;
                    case '[':
                        (braces[i] === ']') ? remove = true : firstChar = braces[i];
                        break;
                    case '{':
                        (braces[i] === '}') ? remove = true : firstChar = braces[i];
                        break;
                }
                if (remove === true) {
                    braces.splice(i, 1);
                    let j = braces.indexOf(firstChar)
                    braces.splice(j, 1);
                    firstChar = braces[0];
                    i = 0;
                }
            } else {
                valid = false;
                break;
            }
        }
    }
    return braces.length === 0;
}

console.log(validBraces("()))"), false);
console.log(validBraces("()"), true);
console.log(validBraces("[]"), true);
console.log(validBraces("{}"), true);
console.log(validBraces("(){}[]"), true);
console.log(validBraces("([{}])"), true);
console.log(validBraces("(}"), false);
console.log(validBraces("[(])"), false);
console.log(validBraces("({})[({})]"), true);
console.log(validBraces("(})"), false);
console.log(validBraces("(({{[[]]}}))"), true);
console.log(validBraces("{}({})[]"), true);
console.log(validBraces(")(}{]["), false);
console.log(validBraces("())({}}{()][]["), false);
console.log(validBraces("(((({{"), false);
console.log(validBraces("}}]]))}])"), false);