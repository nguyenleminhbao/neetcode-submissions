class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (!s) return true;

        const keyMap = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        const stack = [];

        for (let str of s) {
            if (["(", "[", "{"].includes(str)) {
                stack.push(str);
            } else {
                if (stack.length === 0) return false;

                const top = stack[stack.length - 1];

                if (keyMap[top] === str) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
