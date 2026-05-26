class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (heights.length === 0) return 0;

        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const width = right - left;
            const heightL = heights[left];
            const heightR = heights[right];

            if (heightL < heightR) {
                left++;

                maxArea = Math.max(maxArea, heightL * width);
            } else {
                right--;
                maxArea = Math.max(maxArea, heightR * width);
            }
        }

        return maxArea;
    }
}
