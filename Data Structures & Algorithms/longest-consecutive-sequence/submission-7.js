class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const newNums = Array.from(new Set(nums)).sort((a, b) => a - b);
        console.log(newNums);

        let max = 1;
        let longest = max;

        for (let i = 1; i < newNums.length; i++) {
            if (newNums[i] - newNums[i - 1] === 1) {
                max += 1;
                longest = Math.max(max, longest);
            } else {
                longest = Math.max(max, longest);
                max = 1;
            }
        }

        return longest;
    }
}
