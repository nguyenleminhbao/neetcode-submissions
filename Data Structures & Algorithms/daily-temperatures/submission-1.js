class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let result = []
        for(let i = 0; i<temperatures.length ; i ++) {
            const temp = temperatures[i]
            for(let j = i +1; j< temperatures.length ; j++) {
                if (temperatures[j] > temp) {
                    result.push(j-i)
                    break;
                }

                else if (j === temperatures.length -1 ) {
                    result.push(0)
                }
            }
        }

        result.push(0)

        return result
    }
}
