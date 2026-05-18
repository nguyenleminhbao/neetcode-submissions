class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let multi = 1; 
        let numZero = 0;

        for(let num of nums) {
            if (num === 0) {
                numZero ++;
                continue;
            }

            multi *= num;
        }

        if (nums.length === numZero) multi = 0;

        const result = []

        for (let num of nums) {
            if (num === 0 && numZero === 1) result.push(multi)
            else if (num === 0 && numZero > 1) result.push(0)
            else if (numZero > 0) {
                result.push(0)
            }
            else {
                result.push(multi/num)
            }
        }

        return result
    }
}
