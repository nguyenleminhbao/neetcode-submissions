class Solution {

    reserveString(str) {

        let result = ""

        for(let i = str.length -1; i >= 0 ; i --) {
            result += str[i]
        }

        return result;
    }


    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        const newS = s.toLowerCase();
        let str = "";
        for(let i = 0; i<newS.length ; i ++) {
            if (newS[i].match(/[a-z0-9]/)){
                str+= newS[i]
            }
        }
        console.log(str)

        return str === this.reserveString(str)
    }
}
