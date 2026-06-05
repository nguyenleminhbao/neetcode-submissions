class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(!nums.length) return -1; 

        let l = 0; 
        let r = nums.length -1;

        while( l<= r) {
            const mid = Math.trunc((l+r)/2);
            console.log(mid)

            if (nums[mid] === target) return mid; 
            else if (nums[mid]  < target) {
                l = mid +1;
            }
            else {
                r = mid -1;
            }
        }

        return -1
        

    }
}
