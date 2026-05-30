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
        if (!head) return null;

        let tempCopy = new Node(head.val);
        let list = tempCopy;

        const mapIndex = new Map();
        const mapIndexCopy = new Map();
        let index = 0;

        mapIndex.set(head, index);
        mapIndexCopy.set(index, tempCopy);

        let temp = head.next;
        while (temp) {
            index++;
            const newNode = new Node(temp.val);

            tempCopy.next = newNode;
            tempCopy = tempCopy.next;

            mapIndex.set(temp, index);
            mapIndexCopy.set(index, newNode);
            temp = temp.next;
        }

        let temp1 = head;
        let temp2 = list;

        console.log("mapIndex", mapIndex);
        console.log("mapIndexCopy", mapIndexCopy);

        while (temp1 && temp2) {
            const random = temp1.random;

            if (!mapIndex.has(random)) {
                temp2.random = null;
            } else {
                const index = mapIndex.get(random);

                const nodeCopy = mapIndexCopy.get(index);
                temp2.random = nodeCopy;
            }

            temp1 = temp1.next;
            temp2 = temp2.next;
        }

        return list;
    }
}
