class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        console.log(map)

        for (let i = 0; i < nums.length; i++) {
            let left = nums[i]; 
            let right = target - left; 
            const indexRight = map.get(right);

            if (map.has(right) && i !== indexRight) {
                return [i, indexRight]
            }
        }
    }
}
