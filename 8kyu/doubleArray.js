// Given an array of integers, return a new array with each value doubled.

// For example:

//[1, 2, 3] --> [2, 4, 6]

//R: Return a new arr with each value doubled
//E: If we are given [2, 3, 4] should return [4, 6, 8]
//    If we are given [4, 5, 6] should return [8, 10, 12]
//    If we are given [2, 22] should return [4, 44]

//P:
//Make a function that takes in an array
function doubleArray(arr) {
   if (arr.length = 0) {
      console.log('Array is invalid')
   } else {
      return arr.map(num => num * 2);
   }
}
//map through the array and multiply each element by 2. Also return
console.log(doubleArray([2, 3, 4]), [4, 6, 8])
console.log(doubleArray([1, 2, 3]), [2, 4, 6])