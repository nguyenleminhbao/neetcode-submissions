class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const dataMap = {}; 

        for(let str of strs) {
            const strSort = str.split('').sort().join('');

            if (!dataMap[strSort]) {
               dataMap[strSort] = [str]
            }
            else {
                dataMap[strSort].push(str)
            }
        }

        return Object.values(dataMap)
    }
}