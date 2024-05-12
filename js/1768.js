// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let mergedString = "";
    let i = 0;
    for (; i < word1.length; i++) {
        mergedString += word1[i];
        if (word2[i]) {
            mergedString += word2[i];
        }
    }
    while (i < word2.length) {
        mergedString += word2[i];
        i++;
    }
    return mergedString;
};

let word1, word2;

// word1 = "abc", word2 = "pqr"
// word1 = "ab", word2 = "pqrs"
word1 = "abcd", word2 = "pq"

console.log(mergeAlternately(word1, word2))