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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let miss = 0;
        let temp = new ListNode();
        let head = temp;

        while (l1 || l2) {
            let val1 = 0;
            let val2 = 0;

            if (l1) {
                val1 = l1.val;
                l1 = l1.next;
            }

            if (l2) {
                val2 = l2.val;
                l2 = l2.next;
            }

            const sum = val1 + val2 + miss;

            const newNode = new ListNode(sum % 10);
            temp.next = newNode;
            temp = newNode;

            miss = Math.trunc(sum / 10);
        }



        if (miss > 0) {
            const newNode = new ListNode(miss);
            temp.next = newNode;
            temp = newNode;
        }

        return head.next;
    }
}
