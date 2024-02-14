// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""

function solution(string) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let first = 0,
        second,
        newStr = '',
        arr = [];
    for (let i = 0; i < string.length; i++) {
        if (!lower.includes(string.charAt(i))) {
            position = i;
            newStr = string.slice(first, position);
            first = position;
            arr.push(newStr)
        }
    }
    if (first < string.length - 1) {
        newStr = string.slice(-(string.length - first));
        arr.push(newStr)
    }
    if (string.length === 0) {
        return "";
    }
    return arr.join(' ');
}

console.log(solution(""), "");
console.log(solution("camelCasing"), "camel Casing");
console.log(solution("camelCasingTest"), "camel Casing Test");