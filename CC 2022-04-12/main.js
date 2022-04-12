// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(0.5 * time);
}

console.log(litres(2), 1);
console.log(litres(1.4), 0);
console.log(litres(12.3), 6);