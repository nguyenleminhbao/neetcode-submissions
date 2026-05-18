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

    getTwoList (head) {
        let slow = head;
        let fast = head; 

        let leftHalf = head;
        let rightHalf = null;
        let pre = null;

        while(fast && fast.next) {
            pre = slow;
            slow = slow.next; 
            fast = fast.next.next;
        }

        // Handle Left
        pre.next = null;

        // Handle Right
        rightHalf = slow;

        return [leftHalf, rightHalf]
    }

    reverseList(list) {
        let temp = null;
        let next = null; 

        while(list) {
            next = list.next; 

            list.next = temp; 
            temp = list;

            list = next

        }

        return temp;
    }



    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let [leftHalf, rightHalf] = this.getTwoList(head);


        let newRightHalf = this.reverseList(rightHalf);

        let list1 = leftHalf;
        let list2 = newRightHalf
        let tail = null;

        while(list1 && list2) {
           
            const next1 = list1.next;
            const next2 = list2.next;

            list1.next = list2; 
            list2.next = next1;

            tail = list2;

            list1 = next1;
            list2 = next2;
            
        }

        if (list2) {
            tail.next = list2
        }
       

        

        


    }
}
