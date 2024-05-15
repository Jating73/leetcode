/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let countBreaks = 0;
    const n = nums.length;

    // Check for breaks in sorted order
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            countBreaks++;
        }
    }

    // The array is sorted and rotated if there's at most one break
    return countBreaks <= 1;

};

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

// Example 2:
// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.

// Example 3:
// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.