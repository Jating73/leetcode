// Optimal Approach
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

    // Initialize an array to count the frequency of each height
    const count = new Array(101).fill(0);

    // Count the frequency of each height in the heights array
    for (let height of heights) {
        count[height]++;
    }

    let mismatchCount = 0;
    let currentHeight = 0;

    // Iterate through the heights array to compare with the expected order
    for (let height of heights) {
        // Find the next height in the expected order
        while (count[currentHeight] === 0) {
            currentHeight++;
        }
        // Compare the current height with the expected height
        if (height !== currentHeight) {
            mismatchCount++;
        }

        // Move to the next height
        count[currentHeight]--;
    }

    return mismatchCount;
};


// Brute Force Approach
/**
 * @param {number[]} heights
 * @return {number}
 */
// var heightChecker = function (heights) {
//     let heightsDup = [...heights];
//     heightsDup.sort((a, b) => a - b);

//     let count = 0;
//     for (let i = 0; i < heights.length; i++) {
//         if (heights[i] != heightsDup[i]) {
//             count++;
//         }
//     }

//     return count;
// };

let heights;

heights = [1, 1, 4, 2, 1, 3]
// heights = [5, 1, 2, 3, 4]
heights = [1, 2, 3, 4, 5]

console.log(heightChecker(heights));

// Example 1:
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.