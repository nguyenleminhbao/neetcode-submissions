class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;

        if (length === 0) return [];

        const lefts = [1];

        for (let i = 1; i < length; i++) {
            lefts.push(nums[i - 1] * lefts[i - 1]);
        }

        const right = [];
        let multiR = 1;

        for (let i = length - 1; i >= 0; i--) {
            right[i] = multiR * lefts[i];

            multiR *= nums[i];
        }

        console.log("AAA", right);

        return right;
    }
}
