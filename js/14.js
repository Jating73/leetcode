/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // Check if the array is empty
    if (strs.length === 0) {
        return "";
    }

    // Find the shortest string in the array
    let shortest = strs.reduce((min, str) => str.length < min.length ? str : min, strs[0]);

    // Compare each character of the shortest string with all other strings
    for (let i = 0; i < shortest.length; i++) {
        let char = shortest[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                // Return the common prefix up to this point
                return shortest.substring(0, i);
            }
        }
    }

    // If no mismatch found, return the entire shortest string
    return shortest;
};

let strs, output;
strs = ["flower", "flow", "flight"], output = "fl"
// strs = ["dog", "racecar", "car"], output = ""
// strs = ["", ""], output = ""
// strs = ["aa", "ab"], output = "a"
// strs = ["flower", "flower", "flower", "flower"], output = "flower"
// strs = ["aac", "ab"], output = "a"
strs = ["ab", "a"], output = "a"

console.log(longestCommonPrefix(strs))

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.