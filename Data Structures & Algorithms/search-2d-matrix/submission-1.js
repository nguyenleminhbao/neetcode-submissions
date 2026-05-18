class Solution {

    binarySearch(nums, target) {
        let left = 0; 
        let right = nums.length - 1;

        while(left <= right){
            const mid = Math.trunc((left + right)/2); 

            if (nums[mid]< target) {
                left = mid + 1;
            }
            else if (nums[mid] > target) {
                right = mid - 1;
            }
            else {
                return true
            }
        }

        return false
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowLength = matrix.length; 
        if (rowLength === 0) return false; 
        const colLength = matrix[0].length; 

        for(let i = 0; i< rowLength; i ++) {
            const first = matrix[i][0];
            const last = matrix[i][colLength -1];

            if (target>= first && target <= last) 
            {
                return this.binarySearch(matrix[i], target)
            }
        }

        return false
    }
}
