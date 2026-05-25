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

        const entries = Object.entries(map).sort((a,b) => b[1] - a[1])

        return entries.splice(0, k).map(ele=>ele[0])
    }
}
