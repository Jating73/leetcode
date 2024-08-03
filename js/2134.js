// 2134. Minimum Swaps to Group All 1's Together II

// A swap is defined as taking two distinct positions in an array and swapping the values in them.

// A circular array is defined as an array where we consider the first element and the last element to be adjacent.

// Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.



// Example 1:
// Input: nums = [0,1,0,1,1,0,0]
// Output: 1
// Explanation: Here are a few of the ways to group all the 1's together:
// [0,0,1,1,1,0,0] using 1 swap.
// [0,1,1,1,0,0,0] using 1 swap.
// [1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
// There is no way to group all 1's together with 0 swaps.
// Thus, the minimum number of swaps required is 1.

// Example 2:
// Input: nums = [0,1,1,1,0,0,1,1,0]
// Output: 2
// Explanation: Here are a few of the ways to group all the 1's together:
// [1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
// [1,1,1,1,1,0,0,0,0] using 2 swaps.
// There is no way to group all 1's together with 0 or 1 swaps.
// Thus, the minimum number of swaps required is 2.

// Example 3:
// Input: nums = [1,1,0,0,1]
// Output: 0
// Explanation: All the 1's are already grouped together due to the circular property of the array.
// Thus, the minimum number of swaps required is 0.

// Brute Force
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    let totalOnes = 0;
    nums.forEach((num) => {
        totalOnes += num
    });

    if (totalOnes === 0) return 0;

    const extendedNum = nums.concat(nums);
    let minSwaps = Infinity;

    for (let i = 0; i < extendedNum.length; i++) {
        if (i === extendedNum.length - totalOnes) {
            break;
        }
        let currentOnes = 0;
        for (let j = i; j < i + totalOnes; j++) {
            currentOnes += extendedNum[j]
        }
        minSwaps = Math.min(minSwaps, totalOnes - currentOnes)
    }

    return minSwaps
};

// Optimized Version
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const n = nums.length;
    const k = nums.filter(num => num === 1).length;
    let ones = 0;     // the number of ones in the window
    let maxOnes = 0;  // the maximum number of ones in the window

    for (let i = 0; i < n * 2; ++i) {
      if (i >= k && nums[(i - k) % n])
        ones--;
      if (nums[i % n])
        ones++;
      maxOnes = Math.max(maxOnes, ones);
    }

    return k - maxOnes;
};

let nums;

nums = [0, 1, 0, 1, 1, 0, 0]
nums = [0, 1, 1, 1, 0, 0, 1, 1, 0]

console.log(minSwaps(nums));
