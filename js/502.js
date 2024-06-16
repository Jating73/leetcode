class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return max;
    }

    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    let n = profits.length;
    let projects = [];
    for (let i = 0; i < n; i++) {
        projects.push({ profit: profits[i], capital: capital[i] });
    }

    // Min-Heap for capital
    projects.sort((a, b) => a.capital - b.capital);

    let maxHeap = new MaxHeap();
    let i = 0;

    while (k > 0) {
        // Push all projects we can afford into the maxHeap
        while (i < n && projects[i].capital <= w) {
            maxHeap.insert(projects[i].profit);
            i++;
        }

        // If there are no more affordable projects, break
        if (maxHeap.size() === 0) break;

        // Select the most profitable project we can afford
        w += maxHeap.extractMax();
        k--;
    }

    return w;
};


// Brute Force Approach
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
// var findMaximizedCapital = function (k, w, profits, capital) {
//     let map = new Map();
//     let currentCapital = w;
//     profits = profits.reverse()
//     capital = capital.reverse()
//     for (let i = 0; i < profits.length; i++) {
//         map.set(profits[i], capital[i]);
//     }
//     let index = 0;
//     while (k > 0) {
//         for (let [key, value] of map) {
//             if (value <= currentCapital) {
//                 currentCapital += key
//                 map.delete(key);
//                 break;
//             }
//         }
//         k--;
//     }
//     return currentCapital
// };


let k, w, profits, capital;

k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1]

console.log(findMaximizedCapital(k, w, profits, capital))


// Example 1:
// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

// Example 2:
// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6