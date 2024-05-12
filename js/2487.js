

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
var removeNodes = function (head) {

    function reverseList(node) {
        let current = node;
        let prev = null;
        while (current != null) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        return prev;
    }


    head = reverseList(head);

    let max = -Infinity;
    let current = head;
    let dummy = new ListNode();
    let dummyKaCurrent = dummy;

    while (current != null) {
        if (current.val >= max) {
            max = current.val;
            dummy.next = new ListNode(current.val);;
            dummy = dummy.next;
        }
        current = current.next;
    }
    return reverseList(dummyKaCurrent.next);
};


/**
 * Brute Force Approach ---- ERROR -> TLE -----------------
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
// var removeNodes = function (head) {
//     let current = head;
//     let arr = [];
//     while (current != null) {
//         arr.push(current.val)
//         current = current.next;
//     }

//     arr = arr.sort((a, b) => b - a);

//     current = head;
//     let dummy = new ListNode(-1);
//     let dummyKaDummy = dummy;
//     let i = 0;
//     let max = arr.length ? arr[0] : -1;

//     function removeElementFromArray(arr, specificNumber) {
//         let index = arr.indexOf(specificNumber);
//         let newArray = [...arr.slice(0, index), ...arr.slice(index + 1)];
//         return newArray;
//     }

//     while (current != null) {
//         if (current.val === max) {
//             dummy.next = new ListNode(current.val);
//             dummy = dummy.next;
//             max = arr[++i];
//         }

//         if (current.val < max) {
//             arr = removeElementFromArray(arr, current.val);
//         }

//         current = current.next;
//     }
//     return dummyKaDummy.next;
// };