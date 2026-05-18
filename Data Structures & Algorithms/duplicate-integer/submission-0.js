class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false; 

        const dataMap = new Map(); 

        for (let num of nums) {
            if (!dataMap.has(num)) {
                dataMap.set(num, 1) 
            }
            else {
                result =  true
                break;
            }
        }

        return result
    }
}
