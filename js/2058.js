/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {

    if (!head || head.next == null) {
        return [-1, -1]
    }

    let criticalPoints = [];
    let count = 1

    let prev = null;
    let current = head;
    // [5,3,1,2,5,1,2]

    while (current != null) {
        if (prev) {
            let nextValue = current.next ? current.next.val : -1;
            let prevValue = prev.val;
            let currentValue = current.val;

            if(nextValue === -1) {
                break;
            }

            if (currentValue < prevValue && currentValue < nextValue) {
                criticalPoints.push(count)
            } else if (currentValue > prevValue && currentValue > nextValue) {
                criticalPoints.push(count)
            }
        }
        prev = current;
        current = current.next;
        count++;
    }

    if (criticalPoints.length < 2) {
        return [-1, -1];
    }

    let minDistance = Infinity;
    let maxDistance = (
        criticalPoints[criticalPoints.length - 1] - criticalPoints[0]
    );

    for (let i = 1; i < criticalPoints.length; i++) {
        minDistance = Math.min(criticalPoints[i] - criticalPoints[i - 1], minDistance);
    }
    return [minDistance, maxDistance];
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// let head = new ListNode(3);
// head.next = new ListNode(1);

let head = new ListNode(5);
head.next = new ListNode(3);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(1);
head.next.next.next.next.next.next = new ListNode(2);

console.log(nodesBetweenCriticalPoints(head));