/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums = nums.sort((a, b) => a - b);
    const n = nums.length;

    for (let x = 0; x <= n; x++) {
        // Count the number of elements greater than or equal to x
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (nums[i] >= x) {
                count = n - i; // From index i to the end are all >= x
                break;
            }
        }
        if (count === x) {
            return x;
        }
    }

    return -1;


};


// Example 1:
// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
// Example 2:
// Input: nums = [0,0]
// Output: -1
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums.

// Example 3:
// Input: nums = [0,4,3,0,4]
// Output: 3
// Explanation: There are 3 values that are greater than or equal to 3.