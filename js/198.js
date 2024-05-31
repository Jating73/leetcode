/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 1. Failed Approach
    // function f(index) {
    //     if (index === 0) return nums[index];
    //     if (index < 0) return 0;
    //     return nums[index] + f(index - 2)
    // }
    // let left = f(nums.length - 1);
    // let right = f(nums.length - 2);
    // return Math.max(left, right);


    // 2. TLE - Recursion
    // function f(index) {
    //     if (index === 0) return nums[index];
    //     if (index < 0) return 0;

    //     let pick = nums[index] + f(index - 2);
    //     let notPick = 0 + f(index - 1);

    //     return Math.max(pick, notPick);
    // }

    // return f(nums.length - 1);

    // 3. Success - Memoization DP
    // let dp = new Array(nums.length + 1).fill(-1);

    // function f(index) {
    //     if (index === 0) return nums[index];
    //     if (index < 0) return 0;

    //     if (dp[index] !== -1) return dp[index];

    //     let pick = nums[index] + f(index - 2);
    //     let notPick = 0 + f(index - 1);

    //     return (dp[index] = Math.max(pick, notPick));
    // }

    // return f(nums.length - 1);


    // 4. Tabulation
    let dp = new Array(nums.length + 1).fill(-1);

    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let pick = nums[i];
        if (i > 1) {
            pick += dp[i - 2];
        }
        let notPick = 0 + dp[i - 1]

        dp[i] = Math.max(pick, notPick);
    }

    return dp[nums.length - 1];


};

let nums, output;
nums = [1, 2, 3, 1], output = 4;
nums = [2, 7, 9, 3, 1], output = 12;
nums = [2, 1, 1, 2], output = 4;

console.log(rob(nums))

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

//           1
//       p /   \ np
//       2
//    p / \

// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.