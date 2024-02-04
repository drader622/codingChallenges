// You need to hire a catering company out of three for lunch in a birthday party.The first caterer offers only a basic buffet which costs $15 per person.The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person.The third one gives a 20 % discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

// The function takes two arguments denoting the budget in $ and the number of people.Return 1, 2 or 3 for the three caterers as per the above criteria.Return - 1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

// Number of orders is always equal to number of people.

// For example,


//     budget, people => (200, 9) will return 2.

// budget, people => (300, 9) will return 3 and so on.

function findCaterer(budget, people) {
    let option1 = people * 15;
    let option2 = people * 20;
    let option3 = people * 30;
    if (people > 60) {
        let discount = option3 * .2
        option3 -= discount
    }

    if (people === 0) return -1
    if (budget < option1 && budget < option2 && budget < option3) return -1
    if (option3 < budget) return 3
    else if (option2 < budget) return 2
    else return 1

}

console.log(findCaterer(150, 10), 1);
console.log(findCaterer(1500, 60), 2);
console.log(findCaterer(1500, 61), 3);
console.log(findCaterer(100, 0), -1);
console.log(findCaterer(200, 5), 3);
console.log(findCaterer(1000, 45), 2);
console.log(findCaterer(940, 70), -1);
