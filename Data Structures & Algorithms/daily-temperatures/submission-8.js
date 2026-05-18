class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // dailyTemperatures(temperatures) {

    //     let result = []
    //     for(let i = 0; i<temperatures.length ; i ++) {
    //         const temp = temperatures[i]
    //         for(let j = i +1; j< temperatures.length ; j++) {
    //             if (temperatures[j] > temp) {
    //                 result.push(j-i)
    //                 break;
    //             }

    //             else if (j === temperatures.length -1 ) {
    //                 result.push(0)
    //             }
    //         }
    //     }

    //     // Final ele
    //     result.push(0)

    //     return result
    // }

    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];

            while (stack.length > 0 && temp > temperatures[stack[stack.length -1]]) {
                const index = stack.pop();
                result[index] = i - index
            }

            stack.push(i);
        }

        return result;
    }
}
