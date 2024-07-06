/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {

    let prev = null;
    let current = head;
    let currentDummy = head;
    let currentSum = 0;

    while (current != null) {
        if (current.val === 0) {
            if (currentSum !== 0) {
                currentDummy.val = currentSum;
                prev = currentDummy;
                currentDummy = currentDummy.next;
            }
            currentSum = 0;
        } else {
            currentSum += current.val;
        }
        current = current.next;
    }

    prev.next = null;

    return head;
};


// Example 1:
// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.

// Example 2:
// Input: head = [0,1,0,3,0,2,2,0]
// Output: [1,3,4]
// Explanation: 
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 1 = 1.
// - The sum of the nodes marked in red: 3 = 3.
// - The sum of the nodes marked in yellow: 2 + 2 = 4.