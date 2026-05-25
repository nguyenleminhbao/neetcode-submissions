class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[A-Za-z0-9 ]*/;

        let str = "";

        for (let ele of s.toUpperCase()) {
            if ((ele >= "A" && ele <= "Z") || (ele >= "0" && ele <= "9")) {
                str += ele;
            }
        }

        let l = 0;
        let r = str.length - 1;

        while (l <= r) {
            const left = str[l];
            const right = str[r];

            if (left === right) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true;
    }
}
