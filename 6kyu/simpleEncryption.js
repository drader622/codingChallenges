// Implement a pseudo - encryption algorithm which given a string S and an integer N concatenates all the odd - indexed characters of S with all the even - indexed characters of S, this process should be repeated N times.

//     Examples:

// encrypt("012345", 1)  => "135024"
// encrypt("012345", 2)  => "135024" -> "304152"
// encrypt("012345", 3)  => "135024" -> "304152" -> "012345"

// encrypt("01234", 1)  => "13024"
// encrypt("01234", 2)  => "13024" -> "32104"
// encrypt("01234", 3)  => "13024" -> "32104" -> "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    while (n-- && !text) {
        let arr = text.split('');
        let odds = arr.filter((char, index) => {
            if (index % 2 !== 0) return char
        });
        let evens = arr.filter((char, index) => {
            if (index % 2 === 0) return char
        });
        text = odds.join('') + evens.join('');
    }
    return text;
}
function decrypt(encryptedText, n) {
    if (!encryptedText) {
        let arr = new Array(encryptedText.length);
        while (n--) {
            encryptedText = encryptedText.split('');
            for (let i = 1; i < arr.length; i += 2) {
                arr[i] = encryptedText.splice(0, 1);
            }
            for (let i = 0; i < arr.length; i += 2) {
                arr[i] = encryptedText.splice(0, 1);
            }
            encryptedText = arr.join('');
        }
    }

    return encryptedText;
}

console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

console.log(encrypt("", 0), "");
console.log(decrypt("", 0), "");
console.log(encrypt(null, 0), null);
console.log(decrypt(null, 0), null);