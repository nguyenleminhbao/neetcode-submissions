class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowLength = matrix.length; 
        if (rowLength === 0) return false; 
        const colLength = matrix[0].length; 
        
        let left = 0; 
        let right = rowLength * colLength - 1; 

        while (left <= right) {
            const mid = Math.trunc((left + right)/2); 

            const row = Math.trunc(mid / colLength);
            const col = mid % colLength; 

             if (matrix[row][col] < target) {
                left = mid + 1;
            }
            else if (matrix[row][col] > target) {
                right = mid - 1;
            }
            else {
                return true
            }
        }

        return false;
    }
}
