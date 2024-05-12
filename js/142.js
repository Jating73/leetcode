// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0

// Input: head = [1], pos = -1
// Output: no cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let map = new Map();
    let temp = head;
    while (temp != null) {
        if (map.has(temp)) {
            return temp;
        }
        map.set(temp, true);
        temp = temp.next;
    }
    return null;
};

let node1 = new ListNode(3);
let node2 = new ListNode(2);
node1.next = node2;
let node3 = new ListNode(0);
node2.next = node3;
let node4 = new ListNode(-4);
node3.next = node4;
node4.next = node2;

console.log(detectCycle(node1));