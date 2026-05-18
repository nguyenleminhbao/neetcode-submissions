class Solution {
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.trunc((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    binarySearch(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);

            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const indexMin = this.findMin(nums);
        const sorted1 = [...nums].splice(0, indexMin);
        const sorted2 = [...nums].splice(indexMin);

        const index1 = this.binarySearch(sorted1, target);

        console.log(sorted1, sorted2, index1);

        if (index1 !== -1) {
            return index1;
        } else {
            const index2 = this.binarySearch(sorted2, target);
            return index2 !== -1 ? indexMin + index2 : index2;
        }
    }
}
