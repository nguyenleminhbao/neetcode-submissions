class DoubleLL {
    constructor(key = null, val = null, left = null, right = null) {
        this.key = key;
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        const left = new DoubleLL();
        const right = new DoubleLL();

        left.next = right;
        right.left = left;

        this.left = left;
        this.right = right;
    }

    deleteNode(node) {
        const prev = node.left;
        const next = node.right;

        prev.right = next;
        next.left = prev;
    }

    insertNode(node) {
        const prev = this.right.left;

        prev.right = node;
        node.left = prev;

        node.right = this.right;
        this.right.left = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        } else {
            const node = this.cache.get(key);

            this.deleteNode(node);
            this.insertNode(node);

            return node.val;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.val = value;

            this.deleteNode(node);
            this.insertNode(node);
        } else {
            const newNode = new DoubleLL(key, value);
            const length = this.cache.size;

            if (length >= this.capacity) {
                const firstNode = this.left.right;
                this.deleteNode(firstNode);
                this.cache.delete(firstNode.key)
            }

            this.insertNode(newNode);
            this.cache.set(key, newNode);
        }
    }
}
