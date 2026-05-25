class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[A-Za-z0-9 ]*/; 


        let str = ""; 

        for(let ele of s.toUpperCase()) {
            if ((ele >= 'A' && ele <= 'Z') || (ele >= '0' && ele <= '9')){
                str+=ele
            }
        }
        
        const reverseStr = str.split("").reverse().join("")

        console.log("AAA", s.toUpperCase().match(regex)) 

        console.log(str, reverseStr); 

        return str === reverseStr
    }
}
