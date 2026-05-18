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
        const list = []; 


        while(head) {
            if (list.includes(head)) {
                return true;
            }

            list.push(head);
            head = head.next;
        }

        return false;
    }
}
