// 1405. Longest Happy String

// A string s is called happy if it satisfies the following conditions:

// s only contains the letters 'a', 'b', and 'c'.
// s does not contain any of "aaa", "bbb", or "ccc" as a substring.
// s contains at most a occurrences of the letter 'a'.
// s contains at most b occurrences of the letter 'b'.
// s contains at most c occurrences of the letter 'c'.
// Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

// A substring is a contiguous sequence of characters within a string.


// Example 1:
// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.

// Example 2:
// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It is the only correct answer in this case.

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {

    const maxHeap = [];

    if (a > 0) maxHeap.push(['a', a]);
    if (b > 0) maxHeap.push(['b', b]);
    if (c > 0) maxHeap.push(['c', c]);

    maxHeap.sort((x, y) => y[1] - x[1]);

    let result = '';

    while (maxHeap.length > 0) {
        maxHeap.sort((x, y) => y[1] - x[1]);
        let [char1, count1] = maxHeap[0];

        if (result.length >= 2 && result[result.length - 1] === char1 && result[result.length - 2] === char1) {
            if (maxHeap.length < 2) break;

            let [char2, count2] = maxHeap[1];
            result += char2;
            maxHeap[1][1]--;

            if (maxHeap[1][1] === 0) maxHeap.splice(1, 1);
        } else {
            result += char1;
            maxHeap[0][1]--;

            if (maxHeap[0][1] === 0) maxHeap.splice(0, 1);
        }
    }

    return result;

};


let a, b, c;

a = 1, b = 1, c = 7

console.log(longestDiverseString(a, b, c))
