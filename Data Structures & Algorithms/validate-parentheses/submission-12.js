class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const length = s.length;
        if (length % 2 === 1) return false;

        const mapKey = {
            "{": "}",
            "(": ")",
            "[": "]",
        };

        const keys = Object.keys(mapKey);
        const values = Object.values(mapKey)

        let result = true;
        const stack = []

        for (let ele of s) {
            if (ele === '(' || ele === '{' || ele === '[') {
                stack.push(ele)
            }
            else {
                const top = stack[stack.length - 1]
                if (mapKey[top] === ele) {
                    stack.pop()
                }
                else {
                    return false
                }
            }
        }


        return stack.length == 0;
     
    }
}
