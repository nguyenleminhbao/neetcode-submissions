class Solution {

    binarySearch(nums, target, left, right) {

        if (left > right) return -1;

        const mid = Math.trunc((left + right)/2);

        if (nums[mid]===target) return mid;
        else if (nums[mid] < target) {
            return this.binarySearch(nums, target, mid +1 , right)
        }
        else {
            return this.binarySearch(nums, target, left , right -1)
        }

    }




    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.binarySearch(nums, target, 0, nums.length -1)
    }
}
