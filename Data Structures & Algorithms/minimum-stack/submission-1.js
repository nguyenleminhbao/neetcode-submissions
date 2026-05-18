class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
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
        console.log(this.stack)
        return Math.min(...this.stack)
    }
}
