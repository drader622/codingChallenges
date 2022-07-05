// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// P : string of an ip address
// R : true or false if the ip address if valid
// E : "0.0.0.0" = true
// P : split string into array
//     loop through array and check each number if it's valid

function isValidIP(str) {
  let ip = str.split('.');
  let valid = false;
    for (let i = 0; i < ip.length; i++) {
      if (Number(ip[i]) === 0 && ip[i].length === 1) {
        valid = true;
      } else if (Number(ip[i]) < 256 && ip[i].charAt(0) !== '0' && isNumber(ip[i])) {
        valid = true;
      } else {
        return false;
      }
    }
  return ip.length === 4;
}
function isNumber(num) {
  let invalid = [" ", "\n"]
  for (let i = 0; i < num.length; i++) {
    if (isNaN(num[i]) || invalid.includes(num[i])) {
      return false;
    }
  }
  return num > 0;
}

console.log(isValidIP("0.0.0.0"), true);
console.log(isValidIP("12.255.56.1"), true);
console.log(isValidIP("137.255.156.100"), true);
console.log(isValidIP(''), false);
console.log(isValidIP('abc.def.ghi.jkl'), false);
console.log(isValidIP('123.456.789.0'), false);
console.log(isValidIP('12.34.56'), false);
console.log(isValidIP('01.02.03.04'), false);
console.log(isValidIP('256.1.2.3'), false);
console.log(isValidIP('1.2.3.4.5'), false);
console.log(isValidIP('123,45,67,89'), false);
console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(isValidIP(' 1.2.3.4'), false);
console.log(isValidIP('1.2.3.4 '), false);
console.log(isValidIP('12.34.56.-7'), false);
console.log(isValidIP('1.2.3.4\n'), false);
console.log(isValidIP('\n1.2.3.4'), false);