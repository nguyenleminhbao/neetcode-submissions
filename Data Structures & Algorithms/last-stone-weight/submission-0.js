class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for (let stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            const max1 = maxHeap.dequeue();
            const max2 = maxHeap.dequeue();

            if (max1 < max2) {
                maxHeap.enqueue(max2 - max1);
            } else if (max1 > max2) {
                maxHeap.enqueue(max1 - max2);
            }
        }

        return maxHeap.size() === 0 ? 0 : maxHeap.front();
    }
}
