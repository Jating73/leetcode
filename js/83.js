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
var deleteDuplicates = function (head) {

    if (head === null || head.next == null) return head;

    let current = head.next;
    let prev = head;
    while (current != null) {
        if (current.val === prev.val) {

        } else {
            prev.next = current;
            prev = current;
        }
        current = current.next;
    }
    prev.next = null;
    return head;
};


// Example 1:
// Input: head = [1, 1, 2]
// Output: [1, 2]

// Example 2:
// Input: head = [1, 1, 2, 3, 3]
// Output: [1, 2, 3]