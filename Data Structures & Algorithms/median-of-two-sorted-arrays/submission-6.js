class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let l1 = 0;
        let l2 = 0;
        let arr = [];
        const length = nums1.length + nums2.length;

        const medianIndex = Math.trunc(length / 2);
        const isEven = length % 2 === 0;

        console.log(length, medianIndex, isEven);

        while (l1 < nums1.length && l2 < nums2.length) {
            if (nums1[l1] < nums2[l2]) {
                arr.push(nums1[l1]);
                l1++;
            } else {
                arr.push(nums2[l2]);
                l2++;
            }
            console.log(arr, arr.length - 1, medianIndex);
            if (arr.length - 1 === medianIndex) {
                if (!isEven) return arr[medianIndex];
                else {
                    return (arr[medianIndex] + arr[medianIndex - 1]) / 2;
                }
            }
        }

        if (l1 < nums1.length) {
            arr = arr.concat(nums1.splice(l1));
        } else {
            arr = arr.concat(nums2.splice(l2));
        }

        console.log("ARR", arr);

        if (!isEven) return arr[medianIndex];
        else {
            return (arr[medianIndex] + arr[medianIndex - 1]) / 2;
        }

        return 0;
    }
}
