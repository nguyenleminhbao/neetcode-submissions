class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;

        let max = 0;

        while (left <= right) {
            const width = right - left;
            const hLeft = heights[left];
            const hRight = heights[right];

            const area = Math.min(hLeft, hRight) * width;
            max = Math.max(area, max);

            if (hLeft > hRight) {
                right --;
            }
            else {
                left ++
            }
        }

        return max;
    }
}
