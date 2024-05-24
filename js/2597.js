/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    let count = 0;
    const n = nums.length;

    function isBeautiful(subset) {
        const set = new Set(subset);
        for (const num of set) {
            if (set.has(num + k) || set.has(num - k)) {
                return false;
            }
        }
        return true;
    }

    function backtrack(start, currentSubset) {
        if (currentSubset.length > 0 && isBeautiful(currentSubset)) {
            count++;
        }

        for (let i = start; i < n; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    backtrack(0, []);
    return count;
};



// Example 1:
// Input: nums = [2,4,6], k = 2
// Output: 4
// Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// It can be proved that there are only 4 beautiful subsets in the array [2,4,6].

// Example 2:
// Input: nums = [1], k = 1
// Output: 1
// Explanation: The beautiful subset of the array nums is [1].
// It can be proved that there is only 1 beautiful subset in the array [1].