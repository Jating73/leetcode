/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
    const letterCount = Array(26).fill(0);
    for (const letter of letters) {
        letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    function getWordScore(word) {
        let wordScore = 0;
        for (const char of word) {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    }

    function canFormWord(word, letterCount) {
        const tempCount = [...letterCount];
        for (const char of word) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (tempCount[index] === 0) return false;
            tempCount[index]--;
        }
        return true;
    }

    function backtrack(index, currentScore, letterCount) {
        if (index === words.length) return currentScore;

        // Option 1: Skip the current word
        let maxScore = backtrack(index + 1, currentScore, letterCount);

        // Option 2: Include the current word if possible
        const word = words[index];
        if (canFormWord(word, letterCount)) {
            for (const char of word) {
                letterCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
            }
            maxScore = Math.max(maxScore, backtrack(index + 1, currentScore + getWordScore(word), letterCount));
            for (const char of word) {
                letterCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
        }

        return maxScore;
    }

    return backtrack(0, 0, letterCount);
};



// Example 1:
// Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
// Output: 23
// Explanation:
// Score  a=1, c=9, d=5, g=3, o=2
// Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
// Words "dad" and "dog" only get a score of 21.

// Example 2:
// Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
// Output: 27
// Explanation:
// Score  a=4, b=4, c=4, x=5, z=10
// Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
// Word "xxxz" only get a score of 25.

// Example 3:
// Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
// Output: 0
// Explanation:
// Letter "e" can only be used once.