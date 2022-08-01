// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

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