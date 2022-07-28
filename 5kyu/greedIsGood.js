// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function score( dice ) {
  dice.sort();
  let amount = 0,
  total = 0,
    deletePos = 0;
  for (let i = 1; i <= 6; i++) {
    if (dice.includes(i)) {
      amount = 0;
      dice.forEach((num, index) => {
        if (num === i) {
          amount++;
          if (amount === 1) deletePos = index;
        }
      });
      if (amount >= 3) {
        (i === 1) ? total += 1000 : total += i * 100;
        dice.splice(deletePos, 3);
        i = 0;
      }
      else if (amount <= 2 && amount > 0 && i === 1) {
        total += 100;
        dice.splice(deletePos, 1);
        i = 0;
      } else if (amount <= 2 && amount > 0 && i === 5) {
        total += 50;
        dice.splice(deletePos, 1);
        i = 0;
      }
    }
  }
  return total;
}

console.log(score([2, 3, 4, 6, 2]), 0);
console.log(score([4, 4, 4, 3, 3]), 400);
console.log(score( [2, 4, 4, 5, 4] ), 450)
console.log(score([1, 1, 1, 1]), 1100)
console.log(score([1, 1, 5]), 250);
console.log(score([6, 6, 6, 2, 2]), 600);