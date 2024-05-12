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
var doubleIt = function (head) {
    // Reverse Linked List first
    let current = reverseLinkedList(head);
    let currentRef = current;

    let carry = 0;

    while (current) {
        const sum = current.val * 2 + carry;

        current.val = sum % 10;

        carry = Math.floor(sum / 10);

        current = current.next;
    }

    if (carry > 0) {
        let newNode = new ListNode(carry);
        current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    head = reverseLinkedList(currentRef);

    return head;
};

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next;

        current.next = prev;

        prev = current;
        current = nextNode;
    }

    return prev;
}

/**
 * Brute Force Approach - Wrong Answer for Larger number only like [9,1,9,5,0,5,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
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
 * @return {ListNode}
 */
// var doubleIt = function (head) {
//     let current = head;
//     let number = 0;
//     while (current != null) {
//         number = number * Math.pow(10, 1) + current.val;
//         current = current.next;
//     }
//     number = number * 2;
//     number = number.toString();
//     let dummyNode = new ListNode();
//     let currentofDummy = dummyNode;
//     for (let numChar of number) {
//         let node = new ListNode(parseInt(numChar))
//         if (dummyNode != null) {
//             dummyNode.next = node;
//             dummyNode = dummyNode.next;
//         }

//     }
//     return currentofDummy.next;
// };