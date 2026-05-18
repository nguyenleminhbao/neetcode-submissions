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

        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // Split list
        prev.next = null;

        return [head, slow];
    }

    reverseList(head) {
        let prev = null;

        while (head) {
            const nextNode = head.next;

            head.next = prev;
            prev = head;

            head = nextNode;
        }

        return prev;
    }

    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        let [list1, list2] = this.getTwoList(head);

        list2 = this.reverseList(list2);

        let lastMerged = null;

        while (list1 && list2) {
            const next1 = list1.next;
            const next2 = list2.next;

            list1.next = list2;
            list2.next = next1;

            lastMerged = list2;

            list1 = next1;
            list2 = next2;
        }

        // Handle remaining node
        if (list2) {
            lastMerged.next = list2;
        }
    }
}