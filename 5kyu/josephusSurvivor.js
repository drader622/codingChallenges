// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// josephus_survivor(7, 3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1, 2, 3, 4, 5, 6, 7] - initial sequence
// [1, 2, 4, 5, 6, 7] => 3 is counted out
// [1, 2, 4, 5, 7] => 6 is counted out
// [1, 4, 5, 7] => 2 is counted out
// [1, 4, 5] => 7 is counted out
// [1, 4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

function josephusSurvivor(n, k) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    let last = 1,
        count = 0,
        itemsLeft = arr.length;
    while (itemsLeft > 1) {
        if (arr[last - 1] !== '') count++;
        if (count === k) {
            arr[last - 1] = '';
            itemsLeft--;
        }
        if (last === arr.length) last = 0;
        last++;
        if (count === k) count = 0;

    }
    let finalNum = arr.filter(num => num !== '');
    return finalNum[0];
}

console.log(josephusSurvivor(7, 3), 4);
console.log(josephusSurvivor(11, 19), 10);
console.log(josephusSurvivor(1, 300), 1);
console.log(josephusSurvivor(14, 2), 13);
console.log(josephusSurvivor(100, 1), 100);