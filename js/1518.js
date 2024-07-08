/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let sum = 0, rem = 0;
    while (true) {
        sum += numBottles;
        numBottles += rem;
        if (numBottles < numExchange) {
            break;
        }
        rem = (numBottles % numExchange);
        numBottles = Math.floor(numBottles / numExchange);
    }
    return sum;
};

// Example 1:
// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
// Number of water bottles you can drink: 9 + 3 + 1 = 13.

// Example 2:
// Input: numBottles = 15, numExchange = 4
// Output: 19
// Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
// Number of water bottles you can drink: 15 + 3 + 1 = 19.