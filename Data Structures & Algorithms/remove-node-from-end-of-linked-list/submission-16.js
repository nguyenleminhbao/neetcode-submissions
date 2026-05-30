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
    getLength(head) {
        if (!head) return 0;

        let temp = head;
        let count = 0;

        while (temp) {
            count++;

            temp = temp.next;
        }

        return count;
    }

    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) return null;

        let cur = head;
        let prev = null;

        let index = 0;
        let length = this.getLength(head);
        const indexDelete = length - n;

        if (indexDelete === 0) {
            return head.next
        }

        while (cur) {
            if (index === indexDelete) {
                prev.next = cur.next;
              
                break;
            } else {
                prev = cur;
                cur = cur.next;
                index++;
            }
        }

        return head;
    }
}
