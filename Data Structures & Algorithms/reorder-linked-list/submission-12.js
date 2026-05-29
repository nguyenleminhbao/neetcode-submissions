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
    findMidNode(head) {
        if (!head) return null;

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    reverseLinkList(head) {
        if (!head) return null;

        let temp = null;
        let next = null;

        while (head) {
            //console.log(head.val)
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
        if (!head) return;

        const mid = this.findMidNode(head);
        let l2 = mid.next;
        mid.next = null;
        let l1 = head;

        let newL2 = this.reverseLinkList(l2);
        // console.log( "newL2", newL2)

        while (l1 && newL2) {
            let nextl1 = l1.next;
            let nextl2 = newL2.next;

            // console.log('nextl1', nextl1.val);
            // console.log('nextl2', nextl2.val);

            l1.next = newL2;
            newL2.next = nextl1;

            l1 = nextl1;
            newL2 = nextl2;
        }
    }
}
