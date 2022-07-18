// Preface
// A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

// f(n)={n/2, if n is even3n+1, if n is oddf(n) = \begin{cases} n/2, \text{ if $n$ is even} \\ 3n+1, \text{ if $n$ is odd} \end{cases}f(n)={ 
// n/2, if n is even
// 3n+1, if n is odd
// ​
 

// A more detailed description of the collatz conjecture may be found on Wikipedia.

// The Problem
// Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:

// "X0->X1->...->XN"

// Where Xi is each iteration of the sequence and N is the length of the sequence.

// Sample Input
// Input: 4
// Output: "4->2->1"

// Input: 3
// Output: "3->10->5->16->8->4->2->1"
// Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1.

// P : take in an integer > 1
// R : return a string of nums separated by ->
// E : 3 = "3->10->5->16->8->2->1"
// P : see if n is even or odd and apply proper formula
//     store total in array
//     join array into string

function collatz(n) {
    let nums = [];
    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
            nums.push(n);
        } else {
            n = (3 * n) + 1;
            nums.push(n);
        }
    }
    return nums.join('->');
}

console.log(collatz(3), "3->10->5->16->8->4->2->1")