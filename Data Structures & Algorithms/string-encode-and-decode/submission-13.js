class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const length = strs.length;
        return strs.join("~") + "~" +length;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = str.split("~"); 

        console.log(arr)

        const length = Number(arr[arr.length -1]); 

        if (length ===0 ) return []

        return arr.slice(0, length)
    }
}
