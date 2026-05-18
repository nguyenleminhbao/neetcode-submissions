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
        let temp2 = head;
        let length = 0;

        while (temp1) {
            length++;
            temp1 = temp1.next;
        }

        let preDeleteNode = null;
        let deleteNode = null;
        let index = 0;  

        while(temp2) {
            if (index === length - n -1) {
                preDeleteNode = temp2
            }
            else if (index === length - n) {
                deleteNode = temp2
            }

            index++;
            temp2 = temp2.next;
        }

        if (preDeleteNode) {
            preDeleteNode.next = deleteNode.next
        }
        else {
            head = deleteNode.next
        }

        return head;

    }
}
