class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        if (stones.length === 0) return 0;

        const heap = new MaxPriorityQueue();

        for (let stone of stones) {
            heap.enqueue(stone);
        }

        while (heap.size() > 1) {
            const x = heap.dequeue();
            const y = heap.dequeue();

            if (x !== y) {
                heap.enqueue(Math.abs(x - y));
            }
        }

        return heap.size() === 1 ? heap.front() : 0;
    }
}
