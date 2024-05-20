/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let n = nums.length;
    let totalSum = 0;

    // Iterate over all possible subsets
    for (let subsetMask = 0; subsetMask < (1 << n); subsetMask++) {
        let subsetXOR = 0;

        // Calculate XOR for the current subset
        for (let i = 0; i < n; i++) {
            if (subsetMask & (1 << i)) {
                subsetXOR ^= nums[i];
            }
        }

        // Add the XOR of the current subset to the total sum
        totalSum += subsetXOR;
    }

    return totalSum;
};