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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        else if (!list2) return list1;

        let list = new ListNode();
        let result = list;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                list.next = list1;
                list = list1;
                list1 = list1.next;
            } else {
                list.next = list2;
                list = list2;
                list2 = list2.next;
            }
        }

        list.next = list1 || list2

        return result.next;
    }
}
