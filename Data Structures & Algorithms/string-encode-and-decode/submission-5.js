class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let length = strs.length
        strs.push(length.toString())
        return strs.join("~")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        const strs = str.split("~");
        const realLength = parseInt(strs[strs.length -1])
        if (realLength === 0) return [] 
       
        return strs.splice(0,strs.length -1)
    }
}
