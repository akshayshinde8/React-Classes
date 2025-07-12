const randomWords = require("random-words");
const { checkPalindrom, countVowels } = require("./fun.js");

let wordList = randomWords(5);

wordList.forEach((word, index) => {
    let vowels = countVowels(word);
    let isPalindrom = checkPalindrom(word);
    console.log(`word ${index + 1} -> ${word} -> VowelsCount: ${vowels} -> isPalindrom: ${isPalindrom}`)
});