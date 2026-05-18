class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let multi = 1; 
        let hasZero = false;
        let numZero = 0;

        for(let num of nums) {
            if (num === 0) {
                hasZero = true;
                numZero ++;
                continue;
            }

            multi *= num;
        }

        console.log(nums.length, numZero, multi)

        if (nums.length === numZero) multi = 0;

        const result = []

        for (let num of nums) {
            if (num === 0 && numZero === 1) result.push(multi)
            else if (num === 0 && numZero > 1) result.push(0)
            else if (hasZero) {
                result.push(0)
            }
            else {
                result.push(multi/num)
            }
        }

        return result
    }
}
