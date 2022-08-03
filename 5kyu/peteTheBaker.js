// P: two objects - recipe and ingredients
// R: integer of how many cakes can be made with provided ingredients
// E: 
// P: subtract amount needed from ingredients given and add 1 to cakes. Continue to do this until one of the ingredients is less than amount needed.

function cakes(recipe, available) {
  let ObjKeys = Object.keys(recipe);
  let cakes = 0;
  let enough = true;
  for (let i = 0; i < ObjKeys.length; i++) {
    if (!Object.keys(available).includes(ObjKeys[i])) {
      enough = false;
      return 0;
    }
  }

  while (enough) {
    for (const key in recipe) {
      if (available[key] && (available[key] >= recipe[key])) {
        available[key] -= recipe[key];
      } else {
        enough = false;
        return cakes;
      }
    }
    cakes++;
  }

  return cakes;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(recipe, available), 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipe, available), 0);