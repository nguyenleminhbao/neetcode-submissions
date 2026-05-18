class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) {

    //     let multi = 1; 
    //     let numZero = 0;

    //     for(let num of nums) {
    //         if (num === 0) {
    //             numZero ++;
    //             continue;
    //         }

    //         multi *= num;
    //     }

    //     if (nums.length === numZero) multi = 0;

    //     const result = []

    //     for (let num of nums) {
    //         if (num === 0 && numZero === 1) result.push(multi)
    //         else if (num === 0 && numZero > 1) result.push(0)
    //         else if (numZero > 0) {
    //             result.push(0)
    //         }
    //         else {
    //             result.push(multi/num)
    //         }
    //     }

    //     return result
    // }

    productExceptSelf(nums) {
        const length = nums.length; 
        const output = new Array(length); 

        // Tích lũy trái
        output[0] = 1;
        for(let i = 1; i < length ; i ++) {
            output[i] = output[i-1] * nums[i-1]
        }

        // Tích lũy phải
        let right = 1;
        for (let i = length - 1; i >= 0 ; i--) {
            output[i] = output[i] * right;
            right *= nums[i]
        }

        return output
    }
}
