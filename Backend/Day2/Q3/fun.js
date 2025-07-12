function checkPalindrom(word) {
    let reversedWord = word.split("").reverse().join("");
    return word == reversedWord;
}

function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

module.exports = { checkPalindrom, countVowels }