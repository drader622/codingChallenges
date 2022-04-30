// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna) {
    let newStr = dna.split('');
    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].split('').map(letter => {
            switch (letter) {
                case 'A':
                    return 'T';
                    break;
                case 'T':
                    return 'A';
                    break;
                case 'G':
                    return 'C';
                    break;
                case 'C':
                    return 'G';
                    break;
            }
        });
    }
    return newStr.join('');
}

console.log(DNAStrand("AAAA"), "TTTT");
console.log(DNAStrand("ATTGC"), "TAACG");
console.log(DNAStrand("GTAT"), "CATA");