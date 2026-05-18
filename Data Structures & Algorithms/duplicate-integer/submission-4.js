class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let dataSet = new Set(nums) 
       return !(nums.length === dataSet.size)
    }
}
