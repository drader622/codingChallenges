// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
  if ((b + c > a) && (a + c > b) && (a + b > c)) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(1,2,2), true);
console.log(isTriangle(7,2,2), false);