class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cacheMap = new Map();
        this.capacity = capacity;

        const leftNode = new Node(0, 0);
        const rightNode = new Node(0, 0);

        leftNode.next = rightNode;
        rightNode.prev = leftNode;

        this.left = leftNode;
        this.right = rightNode;
    }

    removeNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }



    insertNode(node) {
        let prevNode = this.right.prev;

        prevNode.next = node;
        node.prev = prevNode;

        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cacheMap.has(key)) {
            const node = this.cacheMap.get(key);

            // Remove
            this.removeNode(node);
            // Insert
            this.insertNode(node);

            return node.val;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let nodeExist = this.cacheMap.get(key);

        if (nodeExist) {
            this.removeNode(nodeExist);
        }

        const newNode = new Node(key, value);
        this.insertNode(newNode);
        this.cacheMap.set(key, newNode);

        if (this.cacheMap.size > this.capacity) {
            const deleteNode = this.left.next;
            this.removeNode(deleteNode);
            this.cacheMap.delete(deleteNode.key);
        }
    }
}
