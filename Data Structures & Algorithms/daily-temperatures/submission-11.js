class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length === 0) return [];

        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const currentTemp = temperatures[i];

            console.log(stack)

            while (stack.length > 0 && currentTemp > stack[stack.length - 1][1]) {
                const temp = stack.pop();
                result[temp[0]] =  i - temp[0];
            }

            stack.push([i, currentTemp]);
        }

        return result;
    }
}
