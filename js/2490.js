// 2490. Circular Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

// A sentence is circular if:

// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

// Given a string sentence, return true if it is circular. Otherwise, return false.


// Example 1:
// Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.

// Example 2:
// Input: sentence = "eetcode"
// Output: true
// Explanation: The words in sentence are ["eetcode"].
// - eetcode's last character is equal to eetcode's first character.
// The sentence is circular.

// Example 3:
// Input: sentence = "Leetcode is cool"
// Output: false
// Explanation: The words in sentence are ["Leetcode", "is", "cool"].
// - Leetcode's last character is not equal to is's first character.
// The sentence is not circular.


// Constraints:

// 1 <= sentence.length <= 500
// sentence consist of only lowercase and uppercase English letters and spaces.
// The words in sentence are separated by a single space.
// There are no leading or trailing spaces.

/** Brute Force Failed for hidden test cases
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {

    sentence = sentence.split(' ')

    if (sentence.length === 1) {
        return sentence[0][0] === sentence[0][sentence[0].length - 1]
    }

    let previousWord = sentence[0];

    for (let i = 1; i < sentence.length; i++) {
        const currentWord = sentence[i];
        const currentWordFirstChar = currentWord[0];
        const prevWordLastChar = previousWord[previousWord.length - 1]
        if (prevWordLastChar === currentWordFirstChar) return true

        previousWord = currentWord;
    }

    return false;

};

/** Optimized and Correct
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let words = sentence.split(' ')

    for (let i = 0; i < words.length; i++) {
        const lastChar = words[i].charAt(words[i].length - 1);
        const nextChar = words[(i + 1) % words.length].charAt(0);

        if (lastChar !== nextChar) {
            return false;
        }
    }

    return true;
};

let sentence;

sentence = "leetcode exercises sound delightful"

sentence = "eetcode"

sentence = "Leetcode is cool"

sentence = "leetcode"

console.log(isCircularSentence(sentence))