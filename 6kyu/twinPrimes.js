// A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

// Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

// If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

// Ex n = 10

// Twin Primes are (3,5) (5,7) so your function should return 2!

// P = num (less than 1 invalid)
// R = number of twin prime sets in an integer
// E = 1 === 0
//     10 === 2
// P = loop through numbers 1 - num
//     if number is a prime, see if number - 1 or number + 1 is prime
//     add to total and return total

function twinPrime(n) {
  let i = 1,
    total = 0;
  while (i < n) {
    if (isPrime(i)) {
      if (isPrime(i + 2)) {
        total++;
        i++;
      }
    }
    i++;
  }
  return total;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 2;
}

console.log(twinPrime(-25), 0);
console.log(twinPrime(0), 0);
console.log(twinPrime(1), 0);
console.log(twinPrime(2), 0);
console.log(twinPrime(10), 2);
console.log(twinPrime(11), 2);
console.log(twinPrime(12), 3);
console.log(twinPrime(15), 3);
console.log(twinPrime(25), 4);