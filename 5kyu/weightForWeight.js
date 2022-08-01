// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(strng) {
  let arr = strng.split(' ');
  let end = false;

  arr.forEach((n, i) => {
    let num = n.split('').reduce((sum, num) => sum + Number(num), 0);
    arr[i] = [arr[i], num];
  });

  arr = arr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < arr.length - 1; i++) {
    end = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][1] === arr[j][1]) {
        let pos = 0;
        if (Number(arr[i][0].charAt(pos)) > Number(arr[j][0].charAt(pos))) {
          let temp = arr.splice(j, 1);
          arr.splice(i, 0, temp[0]);
        }
        while (Number(arr[i][0].charAt(pos)) === Number(arr[j][0].charAt(pos)) && pos < arr[i][0].length) {
          pos++;
          if (Number(arr[i][0].charAt(pos)) > Number(arr[j][0].charAt(pos)) || arr[j][0].charAt(pos) === '') {
            let temp = arr.splice(j, 1);
            arr.splice(i, 0, temp[0]);
            end = true;
            break;
          }
        }
        if (end) break;
      }
    }
  }
  return arr.map(x => x[0]).join(' ');
}

console.log(orderWeight("103 123 4444 99 2000"), "\n2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "\n11 11 2000 10003 22 123 1234000 44444444 9999")
console.log(orderWeight("23672 91 44947 18 341944 23 90586 135 275211 67 262397 62 107921 125 269594 104 186794 21 228858 87 25"), "\n21 104 23 25 125 62 135 18 91 67 87 275211 107921 23672 341944 44947 90586 262397 228858 186794 269594")
console.log(orderWeight("326495 121 54861 187 66873 65 36772 89 123535 103 269436 77 4050 146 208192 68 2971 175 472994 112 42"), "\n103 112 121 42 4050 146 65 175 68 77 187 89 123535 2971 208192 54861 36772 326495 269436 66873 472994")
console.log(orderWeight("29774 155 96711 55 211385 178 393620 121 211016 137 392750 155 349937 122 348889 29 52165 131 313924 164 84"), "\n121 122 131 55 137 155 155 164 211016 29 84 178 52165 211385 313924 393620 96711 392750 29774 349937 348889")
console.log(orderWeight("267386 119 164669 104 303811 79 282781 2 116460 100 137714 21 142619 139 470799 107 38787 36 344335 1 3"), "\n1 100 2 21 3 104 107 36 119 139 303811 79 116460 344335 137714 142619 282781 164669 267386 38787 470799")
console.log(orderWeight("497443 132 298979 168 351286 123 188756 60 41515 79 168905 86 307963 146 477390 30 106154 6 3270 92 74"), "\n30 123 132 6 60 146 74 92 3270 86 168 41515 79 106154 351286 307963 168905 477390 497443 188756 298979");
console.log(orderWeight("472603 187 111251 24 200231 73 319415 107 111410 119 344515 127 291516 90 480127 15 386730 186 307636 130 36"), "\n130 15 24 107 111410 200231 36 90 127 73 111251 119 186 187 344515 472603 480127 319415 291516 307636 386730")