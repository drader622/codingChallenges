// Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos.Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.

// A tree is hidden if it is shorter than or the same height as a (any) tree in front of it, as seen in a particular direction.

// Given a list of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.

// Worked Example
// [1, 3, 1, 6, 5] ➞ "left"
// // If I stand on the left, I can see trees of heights 1, 3 and 6.
// // If I stand on the right, I can see trees of heights 5 and 6.
// // Return "left" because I would see more trees.
// Examples
// [5, 6, 5, 4] ➞ "right"

// [1, 2, 3, 3, 3, 3, 3] ➞ "left"

// [3, 1, 4, 1, 5, 9, 2, 6] ➞ "left"

function treePhotography(trees) {
    let leftAmt = 1,
        rightAmt = 1,
        tallest = trees[0];

    trees.forEach((tree, i) => {
        if (tree < trees[i + 1] && trees[i + 1] > tallest) {
            leftAmt++;
            tallest = trees[i + 1];
        } else {
            if (tree > tallest)
                tallest = trees[i];
        }
    });

    trees.reverse();
    tallest = trees[0];

    trees.forEach((tree, j) => {
        if (trees[j - 1] > tree && trees[j - 1] > tallest) {
            rightAmt++;
            tallest = trees[j - 1];
        }
    });

    return leftAmt > rightAmt ? "left" : "right";
}

console.log(treePhotography([1, 2, 3, 6, 5]), "left");
console.log(treePhotography([5, 6, 5, 4]), "right");
console.log(treePhotography([1, 3, 1, 6, 5]), "left");
console.log(treePhotography([1, 1, 2, 2, 2, 2, 3]), "left");
console.log(treePhotography([1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2]), "left");
console.log(treePhotography([3, 3, 3, 3, 2]), "right");
console.log(treePhotography([4, 3, 2, 3, 3, 3, 1]), "right");
console.log(treePhotography([3, 1, 4, 5, 2, 5, 1]), "left");
console.log(treePhotography([8, 4, 3, 3, 4, 9, 2, 9, 3, 6, 3, 3, 7, 4]), "right");