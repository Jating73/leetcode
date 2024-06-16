// Optimal Approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    // Create a map to store the first occurrence of a remainder
    let remainderMap = new Map();
    // Initialize the map with a remainder of 0 at index -1
    remainderMap.set(0, -1);

    // Variable to store the running sum
    let runningSum = 0;

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        // Update the running sum
        runningSum += nums[i];

        // Calculate the remainder when runningSum is divided by k
        let remainder = runningSum % k;

        // If the remainder is negative, convert it to a positive equivalent
        if (remainder < 0) {
            remainder += k;
        }

        // If the remainder has been seen before
        if (remainderMap.has(remainder)) {
            // Check if the subarray length is at least 2
            if (i - remainderMap.get(remainder) > 1) {
                return true;
            }
        } else {
            // Store the index of the first occurrence of this remainder
            remainderMap.set(remainder, i);
        }
    }

    // If no valid subarray is found, return false
    return false;
};


// Brute Force Approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraysDivByK = function (nums, k) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum % k === 0) {
//                 count++
//             }
//         }
//     }
//     return count;
// };


let nums, k;

nums = [4, 5, 0, -2, -3, 1], k = 5
nums = [5], k = 9

console.log(subarraysDivByK(nums, k))

// Example 1:
// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:
// Input: nums = [5], k = 9
// Output: 0