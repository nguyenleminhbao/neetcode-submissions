class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const numsMap = new Map();

        for (let num of nums) {
            if (!numsMap.has(num)) {
                numsMap.set(num, 0);
            }

            const newCount = numsMap.get(num) + 1;

            if (newCount > 1) {
                return num;
            }

            numsMap.set(num, newCount);
        }

        return 0;
    }
}
