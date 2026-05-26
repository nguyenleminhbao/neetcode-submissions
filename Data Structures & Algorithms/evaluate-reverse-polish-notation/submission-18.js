class Solution {
    calculate(v1, v2, op) {
        v1 = Number(v1);
        v2 = Number(v2);

        switch (op) {
            case "+":
                return v1 + v2;
            case "-":
                return v1 - v2;
            case "*":
                return v1 * v2;
            case "/":
                return Math.trunc(v1 / v2);
        }
    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length === 0) return 0;

        const stack = []; 

        for(let token of tokens) {
            if (!["+", "-", "*", "/"].includes(token)) {
                stack.push(token)
            }
            else {
                const val2 = stack.pop(); 
                const val1 = stack.pop(); 

                const newVal  = this.calculate(val1, val2, token); 
                stack.push(newVal)
            }
        }

        return stack[0]
    }
}
