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
     * @return {boolean}
     */
    hasCycle(head) {
        const list = new Set()


        while(head) {
            if (list.has(head)) {
                return true;
            }

            list.add(head);
            head = head.next;
        }

        return false;
    }
}
