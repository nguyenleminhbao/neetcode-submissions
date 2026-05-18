class Solution {

    sumTwo(nums, left,  target) {
        let right = nums.length-1;

        const result = []

        while(left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target && left !== right ) {
                result.push([nums[left], nums[right]]) 
            }

            if (sum< target) {
                left ++;
            }
            else {
                right --
            }
        }

        return result
    }


    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortNums = nums.sort((a,b)=>a-b)
        const length = sortNums.length;

        const result = []

        for(let i = 0 ; i < length ; i ++) {
            const num1 = sortNums[i]; 
            const target = 0 - num1;

            const arrSum = this.sumTwo(sortNums, i+1,  target)

            if (arrSum.length > 0) {
                for(let ele of arrSum) {
                    result.push([num1].concat(ele))
                }
              
            }


        }

        // Remove duplicate
        const newResult = result.map(ele=>ele.join("#"))
        const newRemoveDuplicate = Array.from(new Set(newResult))

        return newRemoveDuplicate.map(ele=>ele.split("#"))
    }
}
