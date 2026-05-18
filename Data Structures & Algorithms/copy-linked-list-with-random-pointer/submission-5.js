// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let temp = head;
        let temp1 = new Node();
        let newHead = temp1;
        const pointerMap = new Map()

        // Copy node
        while (temp) {
            const newNode = new Node(temp.val);

            temp1.next = newNode;
            temp1 = newNode;

            pointerMap.set(temp, newNode);
            temp = temp.next;
        }

        newHead = newHead.next;

        let temp3 = head;
        let temp4 = newHead;

        while (temp3 && temp4) {
            let random = temp3.random;
            temp4.random = pointerMap.get(random) ||  null;

            temp3 = temp3.next;
            temp4 = temp4.next;
        }

        return newHead;
    }
}
