class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set(); 

        let l = 0; 
        let maxL = 0;
        
        for (let r = 0; r < s.length ; r++) {
            const right = s[r] ; 

            while(set.has(right)) {
                set.delete(s[l]);
                l++;
            }

            set.add(right);

            maxL = Math.max(maxL, r - l + 1);

        }

        return maxL
    }
}
