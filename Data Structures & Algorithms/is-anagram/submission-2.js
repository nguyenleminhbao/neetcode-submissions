class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        let sSort = s.split('').sort();
        let tSort = t.split('').sort();


        for(let i = 0; i < sSort.length; i ++) {
            if (sSort[i] !== tSort[i]) return false
        }
        return true;
    }
}
