class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateMap = new Map(); 

        for(let num of nums) {
            if(duplicateMap.has(num)) {
                return true;
            }
            else {
                duplicateMap.set(num, true)
            }
        }

        return false
    }
}
