// There is an array of strings.All strings contains similar letters except one.Try to find it!

// findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']) === 'BbBb'
// findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']) === 'foo'
// Strings may contain spaces.Spaces are not significant, only non - spaces symbols matters.E.g.string that contains only spaces is like empty string.

//     It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
    let sortedArrays = arr.map(a => {
        return [...new Set(a.toLowerCase())].sort().join('')
    });
    for (let i = 0; i < sortedArrays.length; i++) {
        if (sortedArrays.indexOf(sortedArrays[i]) === sortedArrays.lastIndexOf(sortedArrays[i]))
            return arr[i]
    }
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
console.log(findUniq(['silvia', 'vasili', 'victor']), 'victor');
console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
console.log(findUniq(['    ', 'a', ' ']), 'a');