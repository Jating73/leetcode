/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++
        }
    }
    for (const value in map) {
        if (map[value] === 1) {
            return value;
        }
    }
};

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1