class Solution {

    calculate(num1, num2, operation) {
        let result = 0;
        switch(operation) {
            case "+": 
                result = num1 + num2 ; 
                break;
            case "-": 
                result = num1 - num2 ; 
                break;
            case "*": 
                result = num1 * num2 ; 
                break;
            case "/": 
                result = Math.trunc(num1 / num2) ; 
                break;
            default: 
                result = 0
        }

        return result;
    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let result = 0 ;

        const operations = ["+", "-", "*", "/"]
        const stack = []

        for (let token of tokens) {
            if (!operations.includes(token)) {
                stack.push(parseInt(token))
            }
            else {
                const length = stack.length;
                const num2 = stack[length -1];
                const num1 = stack[length -2];
                stack.pop();
                stack.pop();

             
                stack.push(this.calculate(num1, num2 , token))
            }
        }

        return stack[0];
    }
}
