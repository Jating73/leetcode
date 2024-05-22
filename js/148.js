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
var sortList = function (head) {
    let current = head, temp = [];
    while (current != null) {
        temp.push(current.val);
        current = current.next;
    }
    temp.sort((a, b) => a - b);
    current = head;
    while (current != null) {
        current.val = temp.shift();
        current = current.next;
    }
    return head;
};


// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []