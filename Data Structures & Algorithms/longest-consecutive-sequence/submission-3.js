class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0 ) return 0

        const sortedNums = nums.sort((a,b)=>a-b)
        const newNums = Array.from(new Set(sortedNums))

        let currentLong = 1;
        let maxLong = 1;

        for(let i = 0; i < newNums.length - 1; i ++) {
            if (newNums[i+1] === newNums[i] + 1) {
                currentLong +=1;
            }
            else {
                maxLong = Math.max(currentLong, maxLong);
                currentLong = 1;
            }
        }

        return Math.max(currentLong, maxLong)
    }
}
