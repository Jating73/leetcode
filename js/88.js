// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"

// Input: word = "abcd", ch = "z"
// Output: "abcd"

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let charExist = word.indexOf(ch);
    if (charExist < 0) {
        return word;
    }

    let reversedString = "";
    for (let i = charExist; i >= 0; i--) {
        reversedString += word[i];
    }

    reversedString += word.substr(charExist + 1)

    return reversedString
};

let word = "abcdefd", ch = "d";

console.log(reversePrefix(word, ch))