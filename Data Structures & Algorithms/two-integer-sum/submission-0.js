class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const dataMap = new Map() ;

        for(let i = 0; i < nums.length ; i ++) {
            dataMap.set(nums[i], i)
        }

        for(let i = 0; i < nums.length ; i ++) {
            const num1 = nums[i];
            const num2 =  target - num1;
            const num1Index = i;
            const num2Index = dataMap.get(num2) 

            if (num2Index && num1Index !== num2Index) 
            return [num1Index, num2Index]
        }
    }
}
