/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp1 = head;
        let list = [];

        while (temp1) {
            list.push(temp1);
            temp1 = temp1.next;
        }

        let indexDelete = list.length - n;
        let preDeleteNode = list[indexDelete - 1];
        let deleteNode = list[indexDelete];

        console.log(preDeleteNode, deleteNode);

        if (preDeleteNode && deleteNode) {
            preDeleteNode.next = deleteNode.next;
        }
        else if (!preDeleteNode && deleteNode) {
            head = deleteNode.next
        }

        deleteNode.next = null;

        return head;
    }
}
