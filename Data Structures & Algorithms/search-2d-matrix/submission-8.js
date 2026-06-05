class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length) return false;

        const ROW = matrix.length;
        const COLUMN = matrix[0].length;

        let l = 0;
        let r = ROW * COLUMN - 1; 

        while(l <= r) {
            const mid = Math.trunc((l+r)/2); 

            let indexR= Math.trunc(mid/COLUMN); 
            let indexC = mid - indexR*COLUMN; 

            if (matrix[indexR][indexC]=== target) return true;
            else if (matrix[indexR][indexC] < target) {
                l = mid +1
            }
            else {
                r = mid -1;
            }
        }

        return false
    }
}
