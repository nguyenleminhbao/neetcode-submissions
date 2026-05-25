class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (let num of nums) {
            if (!map[num]) map[num] = 0;

            map[num] += 1;
        }

        const minHeap = new MinPriorityQueue(ele => ele[1]); 

        for (let [num, count] of Object.entries(map)) {
            minHeap.enqueue([num, count])

            if (minHeap.size() > k) {
                minHeap.dequeue()
            }
        }

        const result = [] ; 

        while(minHeap.size()) {
            result.push(minHeap.dequeue()[0])
        }

        return result;
    }
}
