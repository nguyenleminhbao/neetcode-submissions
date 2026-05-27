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
        if(!head) return false; 

        const map = new Map(); 

        while(head) {
            if (map.has(head)) {
                return true
            }
            else {
                map.set(head, 1); 
                head = head.next;
            }
        }

        return false
    }
}
