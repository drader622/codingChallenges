// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let arr = [],
        j = 0;

    while (j < str.length) {
        arr.push(`${str.charAt(j)}${str.charAt(j + 1)}`)
        j += 2;
    }

    if (str.length % 2 !== 0) arr[arr.length - 1] += '_';

    return arr;
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);