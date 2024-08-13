/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    // If the array has 3 or fewer elements, we can make all elements equal
    if (nums.length <= 4) return 0;

    // Sort the array
    nums.sort((a, b) => a - b);

    console.info("Nums - ", nums);

    // Calculate the minimum difference after making at most 3 moves
    // Possible combinations of moves:
    // 1. Change the 3 largest elements
    // 2. Change the 2 largest and 1 smallest element
    // 3. Change the 1 largest and 2 smallest elements
    // 4. Change the 3 smallest elements
    let n = nums.length;
    return Math.min(
        nums[n - 1] - nums[3],     // Change the 3 smallest elements
        nums[n - 2] - nums[2],     // Change the 2 smallest and 1 largest element
        nums[n - 3] - nums[1],     // Change the 1 smallest and 2 largest elements
        nums[n - 4] - nums[0]      // Change the 3 largest elements
    );
};


let nums;
nums = [5, 3, 2, 4];
nums = [1, 5, 0, 10, 14]

console.log(minDifference(nums));