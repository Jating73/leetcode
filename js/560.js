// Optimal Approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // Create a map to store the cumulative sum frequencies
    let sumFreq = new Map();
    // Initialize the map with 0 sum having 1 frequency
    sumFreq.set(0, 1);

    let cumulativeSum = 0;
    let count = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Update the cumulative sum
        cumulativeSum += nums[i];

        // Calculate the difference needed to form a subarray with sum k
        let diff = cumulativeSum - k;

        // If the difference exists in the map, it means there are subarrays
        // ending at index i which sum to k
        if (sumFreq.has(diff)) {
            count += sumFreq.get(diff);
        }

        // Update the frequency of the current cumulative sum in the map
        if (sumFreq.has(cumulativeSum)) {
            sumFreq.set(cumulativeSum, sumFreq.get(cumulativeSum) + 1);
        } else {
            sumFreq.set(cumulativeSum, 1);
        }
    }

    return count;
}

// Brute Force
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum === k) {
//                 count++;
//             }
//         }
//     }

//     return count;
// };


let nums, k;

nums = [1, 1, 1], k = 2
nums = [1, 2, 3], k = 3

console.log(subarraySum(nums, k));


// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2