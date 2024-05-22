/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];

    let subset = [];

    function dfs(index) {
        if (index >= nums.length) {
            return result.push([...subset]);
        }

        subset.push(nums[index]);
        dfs(index + 1);
        subset.pop();

        dfs(index + 1);

    }

    dfs(0)

    return result;
};


// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]