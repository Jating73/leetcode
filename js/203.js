/**
 * Brute Force Approach
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

    if (head === null) return head;

    let current = head;
    let array = [];
    while (current != null) {
        if (current.val != val) {
            array.push(current.val)
        }
        current = current.next;
    }

    current = head;

    if (array.length === 0) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        current.val = array[i];
        if (i === array.length - 1) {
            break;
        }
        current = current.next;
    }

    current.next = null;

    return head;

};


// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []


/**
 * Optimized Approach
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

    if (head === null) return head;

    let prev = new ListNode();
    let prevDummy = prev;
    let current = head;
    while (current != null) {
        if (current.val != val) {
            prev.next = current;
            prev = current;
        }
        current = current.next;
    }

    prev.next = null;

    return prevDummy.next;
};


// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []