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
     * @return {ListNode}
     */
    reverseList(head) {
        let temp = null

        while(head){
            let next = head.next;
           
            head.next = temp;
            temp = head;


            head = next;
        }

        return temp

    }
}
