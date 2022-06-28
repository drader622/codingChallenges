// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    let valid = false;
    let index = 0;
    parens = parens.split('')
    if (parens.length === 0) {
        return true;
    }
    while (parens.length % 2 === 0 && parens.length > 0) {
        if (parens[0] === '(' && parens[parens.length - 1] === ')') {
            if (parens[0] === '(') {
                index = parens.indexOf(')');
            }
            if (index === -1) {
                valid = false;
                break;
            } else {
                parens.splice(index, 1);
                parens.splice(0, 1);
                valid = true;
            }

        } else {
            valid = false;
            break;
        }
    }
    return valid;
}

console.log(validParentheses("("), false);
console.log(validParentheses(")"), false);
console.log(validParentheses(""), true);
console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);