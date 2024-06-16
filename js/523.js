// Optimized Approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum % k === 0) {
                return true;
            }
        }
    }

    return false;
};

// Brute Force
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var checkSubarraySum = function (nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         let sum = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum % k === 0) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };


let nums, k;

nums = [23, 2, 4, 6, 7], k = 6
nums = [23, 2, 6, 4, 7], k = 6
nums = [23, 2, 6, 4, 7], k = 13

console.log(checkSubarraySum(nums, k))

// Example 1:
// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

// Example 2:
// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

// Example 3:
// Input: nums = [23,2,6,4,7], k = 13
// Output: false