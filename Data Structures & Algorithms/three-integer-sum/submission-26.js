class Solution {
    twoSum(nums, target, l, r) {
        let left = l;
        let right = r;

        const result = [];

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum < target) {
                left += 1;
            } else if (sum > target) {
                right -= 1;
            } else {
                result.push([nums[left], nums[right]]);
                left++;
            }
        }

        return result;
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        if (nums.length === 0) return [];

        const sortedNums = nums.sort((a, b) => a - b);
        const length = sortedNums.length;

        const result = [];

        for (let i = 0; i < length; i++) {
            const target = -sortedNums[i];

            const twoSumValues = this.twoSum(sortedNums, target, i + 1, length - 1);

            for (let twoSumValue of twoSumValues) {
                result.push([sortedNums[i], ...twoSumValue].join("#"));
            }
        }

        return Array.from(new Set(result)).map((ele) => ele.split("#").map((ele) => Number(ele)));
    }
}
