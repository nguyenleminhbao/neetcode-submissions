class MinStack {
    constructor() {
        this.stack = []
        this.min = null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.min === null) {
            this.min = val;
        }
        else {
            this.min = Math.min(val, this.min)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.min = Math.min(...this.stack)
    }

    /**
     * @return {number}
     */
    top() {
        const length = this.stack.length;
        return this.stack[length -1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
