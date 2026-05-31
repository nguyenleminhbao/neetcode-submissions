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
        if(!l1) return l2; 
        else if (!l2) return l1; 

        let miss = 0; 
        let temp = new ListNode();
        let result = temp; 


        while(l1 || l2) {
            let sum = 0;

            sum += miss; 

            if(l1) {
                sum+= l1.val;
                l1 = l1.next; 
            } 
            if(l2) {
                sum+=l2.val; 
                l2 = l2.next;
            } 

            const val = sum%10; 
            miss = Math.trunc(sum/10)
            const newNode = new ListNode(val); 
            temp.next = newNode;
            temp = newNode; 
        }

        if (miss) {
            
            const newNode = new ListNode(miss); 
            temp.next = newNode;
        }

        return result.next
    }
}
