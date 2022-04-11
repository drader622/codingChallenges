// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

let century = year => (Math.ceil(year / 100));

console.log(century(1705), 18);
console.log(century(1900), 19);
console.log(century(1601), 17);
console.log(century(2000), 20);
console.log(century(89), 1);