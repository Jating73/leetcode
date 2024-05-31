/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    // Recursion
    // let dp = new Array(n + 1).fill(-1);

    // function countWays(index) {

    //     if (index === 0) return 1;
    //     if (index === 1) return 1;

    //     if (dp[index] != -1) return dp[index];

    //     let left = climbStairs(index - 1);
    //     let right = 0
    //     if (index > 1) {
    //         right = climbStairs(index - 2);
    //     }

    //     dp[index] = left + right;

    //     return dp[index];
    // }

    // return countWays(n);


    // Tabulation
    let dp = new Array(n + 1).fill(-1);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};