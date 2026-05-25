class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    sortString(s){
        return s.split("").sort().join("")
    }

    isAnagram(s, t) {
        console.log(this.sortString(s), this.sortString(t))
       return this.sortString(s) === this.sortString(t)
    }
}
