// 2530. Maximal Score After Applying K Operations

// You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.

// In one operation:

// choose an index i such that 0 <= i < nums.length,
// increase your score by nums[i], and
// replace nums[i] with ceil(nums[i] / 3).
// Return the maximum possible score you can attain after applying exactly k operations.

// The ceiling function ceil(val) is the least integer greater than or equal to val.



// Example 1:
// Input: nums = [10,10,10,10,10], k = 5
// Output: 50
// Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.

// Example 2:
// Input: nums = [1,10,3,3,3], k = 3
// Output: 17
// Explanation: You can do the following operations:
// Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
// Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
// Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
// The final score is 10 + 4 + 3 = 17.


// Constraints:

// 1 <= nums.length, k <= 105
// 1 <= nums[i] <= 109

class MaxPriorityQueue {
    constructor() {
        this.heap = []
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2) }
    getLeftChildIndex(i) { return 2 * i + 1 }
    getRightChildIndex(i) { return 2 * i + 2 }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0]
    }

    enqueue(val) {
        this.heap.push(val)
        this.heapifyUp();
    }

    dequeue() {
        if (this.heap.length === 0) throw new Error("Heap is empty");

        if (this.heap.length === 1) {
            return { element: this.heap.pop() }
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapfiyDown();

        return { element: max }
    }

    heapifyUp() {

        let index = this.heap.length - 1;

        while (index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index);
        }

    }

    heapfiyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]) {
                largerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] >= this.heap[largerChildIndex]) {
                break;
            }

            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

}


/** Optimized Approach - O(logn * k) & O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    let score = 0;
    const maxHeap = new MaxPriorityQueue();

    nums.forEach(num => maxHeap.enqueue(num));

    while (k > 0) {
        const max = maxHeap.dequeue().element;
        score += max;

        maxHeap.enqueue(Math.ceil(max / 3));
        k--;
    }

    return score;

};

/** Brute Force Approach - O(n * k) & O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxKelements = function (nums, k) {
//     let score = 0;
//     let max = 0;
//     let index = 0;

//     while (k != 0) {
//         max = Math.max(...nums);
//         index = nums.findIndex((num) => num === max);
//         score += nums[index]
//         nums[index] = Math.ceil(nums[index] / 3);
//         k--;
//     }

//     return score

// };


let nums, k;

// nums = [10, 10, 10, 10, 10], k = 5
nums = [1, 10, 3, 3, 3], k = 3

console.log(maxKelements(nums, k))