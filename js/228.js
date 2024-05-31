/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    if (nums.length === 0) return nums;

    let ans = [];

    let current = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] <= 1) {
            continue;
        } else {
            if (i == 1 || (nums[i - 1] === current[0])) {
                ans.push(current);
                current = [nums[i]];
            } else {
                current.push(nums[i - 1]);
                ans.push(current);
                current = [nums[i]];
            }
        }
    }

    if (current.length === 1) {
        if (current[0] != nums[nums.length - 1]) {
            current.push(nums[nums.length - 1]);
        }
        ans.push(current);
    }

    for (let i = 0; i < ans.length; i++) {
        let pair = ans[i];
        if (pair.length == 1) {
            ans[i] = `${pair}`
        } else {
            ans[i] = `${pair[0]}->${pair[1]}`
        }
    }


    return ans;
};

// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"