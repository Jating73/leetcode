// 1717. Maximum Score From Removing Substrings

// You are given a string s and two integers x and y. You can perform two types of operations any number of times.

// Remove substring "ab" and gain x points.
// For example, when removing "ab" from "cabxbae" it becomes "cxbae".
// Remove substring "ba" and gain y points.
// For example, when removing "ba" from "cabxbae" it becomes "cabxe".
// Return the maximum points you can gain after applying the above operations on s.


// Optimized
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    let maxPattern = x >= y ? 'ab' : 'ba';
    let minPattern = x >= y ? 'ba' : 'ab';
    let maxPoints = Math.max(x, y);
    let minPoints = Math.min(x, y);

    function processPattern(s, pattern, points) {
        let stack = [];
        let score = 0;

        for (let char of s) {
            if (stack.length && stack[stack.length - 1] === pattern[0] && char === pattern[1]) {
                stack.pop();
                score += points;
            } else {
                stack.push(char);
            }
        }

        return { remainingString: stack.join(''), score };
    }

    // First pass to remove the more valuable pattern
    let { remainingString, score } = processPattern(s, maxPattern, maxPoints);

    // Second pass to remove the less valuable pattern
    let result = processPattern(remainingString, minPattern, minPoints);

    return score + result.score;
};

// Brute Force Giving TLE
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {

    let map = {
        "x": "ab",
        "y": "ba"
    };

    let pointMap = {
        "x": x,
        "y": y
    }

    let priority = x > y ? "x" : "y";
    let nonPriority = x < y ? "x" : "y";
    let points = 0;

    while (true) {
        if ((s.indexOf(map[priority]) > -1)) {
            let index = s.indexOf(map[priority])
            points += pointMap[priority];
            s = s.split('');
            s.splice(index, 2);
            s = s.join('')
        } else if ((s.indexOf(map[nonPriority]) > -1)) {
            let index = s.indexOf(map[nonPriority])
            points += pointMap[nonPriority];
            s = s.split('');
            s.splice(index, 2);
            s = s.join('')
        } else {
            break;
        }
    }

    return points;

};

let s, x, y;

s = "cdbcbbaaabab", x = 4, y = 5

console.log(maximumGain(s, x, y))

// Example 1:
// Input: s = "cdbcbbaaabab", x = 4, y = 5
// Output: 19
// Explanation:
// - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
// - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
// - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
// - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
// Total score = 5 + 4 + 5 + 5 = 19.

// Example 2:
// Input: s = "aabbaaxybbaabb", x = 5, y = 4
// Output: 20