// 137. Single Number II
// Medium

// 7937

// 692

// Add to List

// Share
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {}

    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let num in map) {
        if (map[num] === 1) return num;
    }
};