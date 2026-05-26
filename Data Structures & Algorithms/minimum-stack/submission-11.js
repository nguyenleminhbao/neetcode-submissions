class MinStack {
    constructor() {
        this.minStack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.minStack.push(val); 
        this.min = Math.min(this.min, val)
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.minStack.pop(); 

        if (this.min >= val) {
            this.min = Math.min(...this.minStack)
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.minStack[this.minStack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
