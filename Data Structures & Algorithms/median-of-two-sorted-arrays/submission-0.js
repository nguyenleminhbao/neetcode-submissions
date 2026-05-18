class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const lengthL1 = nums1.length;
        const lengthL2 = nums2.length;

        let left1 = 0;
        let left2 = 0;

        let sortedArr = [];

        while (left1 < lengthL1 && left2 < lengthL2) {
            if (nums1[left1] < nums2[left2]) {
                sortedArr.push(nums1[left1]);

                left1++;
            } else {
                sortedArr.push(nums2[left2]);

                left2++;
            }
        }

        sortedArr =
            left1 < lengthL1
                ? sortedArr.concat(nums1.splice(left1))
                : sortedArr.concat(nums2.splice(left2));

        const length = lengthL1 + lengthL2; 

        if (length % 2 !== 0 ) {
            return sortedArr[Math.trunc(length/2)]
        }
        else{
            const mid = length/2; 
            return (sortedArr[mid] + sortedArr[mid-1])/2
        }
    }
}
