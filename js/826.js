/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {

    worker.sort((a, b) => a - b);

    let newArray = [];

    for (let i = 0; i < difficulty.length; i++) {
        let obj = { difficulty: difficulty[i], profit: profit[i] };
        newArray.push(obj)
    }

    newArray.sort((a, b) => a.difficulty - b.difficulty)


    /**
     * ----------------------------
     * [
     *  {35: 17},
     *  {47: 81},
     *  {52: 1}
     *  {68: 67}
     *  {86: 3}
     * ]
    */

    /**
     * [10, 82, 84, 85, 92]
     * 
     * ----------------------------
     * */

    let maxProfit = 0;
    // 81 + 81 + 81 + 81

    for (let i = 0; i < worker.length; i++) {
        let capacity = worker[i];
        let currentProfit = 0;
        for (let j = 0; j < newArray.length; j++) {
            let problem = newArray[j].difficulty;
            if (capacity < problem) {
                break;
            } else {
                currentProfit = Math.max(newArray[j].profit, currentProfit);
            }
        }
        maxProfit += currentProfit;
    }

    return maxProfit

};

let difficulty, profit, worker;

// difficulty = [2, 4, 6, 8, 10], profit = [10, 20, 30, 40, 50], worker = [4, 5, 6, 7]
// difficulty = [85, 47, 57], profit = [24, 66, 99], worker = [40, 25, 25]
difficulty = [68, 35, 52, 47, 86], profit = [67, 17, 1, 81, 3], worker = [92, 10, 85, 84, 82]

console.log(maxProfitAssignment(difficulty, profit, worker))

// Example 1:
// Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
// Output: 100
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.

// Example 2:
// Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
// Output: 0