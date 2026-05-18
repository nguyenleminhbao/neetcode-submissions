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

    getTwoList(head) {
        let slow = head;
        let fast = head; 

        while(fast && fast.next) {
            slow = slow.next; 
            fast = fast.next.next;
        }

        let list2 = slow.next; 
        slow.next = null;

        let list1 = head; 

        return [list1, list2]
    }

    reverseList(head) {
        if(!head || !head.next) return head;

        let temp = null; 
        let next = null; 

        while(head) {
            next = head.next; 

            head.next = temp;
            temp = head; 

            head = next;
        } 

        return temp;
    }


    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        let [list1, list2Pre] = this.getTwoList(head);
        let list2 = this.reverseList(list2Pre);


        while(list1 && list2) {
            let next1 = list1.next;
            let next2 = list2.next

            list1.next = list2; 
            list2.next= next1;

            list1 = next1;
            list2 = next2; 

        }


    }
}
