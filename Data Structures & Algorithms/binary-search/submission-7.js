class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (!nums.length) return -1; 

        let l = 0; 
        let r = nums.length -1; 

        while(l <= r) {
            const mid = Math.trunc((l+r)/2); 
            const value = nums[mid]; 

            if (value < target) {
                l = mid + 1;
            }
            else if (value > target) {
                r = mid -1
            }
            else {
                return mid;
            }

        }

        return -1
    }
}
