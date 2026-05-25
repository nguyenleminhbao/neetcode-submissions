class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    sortString(str) {
        return str.split("").sort().join("");
    }


    groupAnagrams(strs) {
        const obj = {}; 

        for(let i = 0; i < strs.length ; i ++) {
            const sortStr = this.sortString(strs[i]); 

            if (!obj[sortStr]) {
                obj[sortStr] = []
            }

            obj[sortStr].push(strs[i])

        }

        const result = []

        const strEntries = Object.entries(obj)


        for (let [ele, arr] of strEntries) {
            result.push(arr)
        }

        return result
    }
}
