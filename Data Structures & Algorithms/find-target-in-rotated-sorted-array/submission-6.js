class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (!nums.length) return -1;

        let arr = [];

        for (let i = 0; i < nums.length; i++) {
            arr.push([i, nums[i]]);
        }

        arr = arr.sort((a, b) => a[1] - b[1]);

        console.log(arr);

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);

            console.log(arr[mid][1], target, arr[mid][1] === target);
            const index = arr[mid][0];
            const value = arr[mid][1];

            if (value === target) {
                return index;
            } else if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
