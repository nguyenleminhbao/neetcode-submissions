class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        
        const n = position.length; 

        const newMap = []

        for(let i = 0; i < n ; i ++) {
            const time = (target - position[i]) / speed[i]
            newMap.push([position[i], speed[i], time])
        }

        const sortedNewMap = newMap.sort((a,b)=>b[0] - a[0])

        let num = 1;
        const fixValue = sortedNewMap[0][2];
        const stack = [fixValue]

        for(let ele of sortedNewMap) {
            const top = stack[stack.length -1]
          
            if(ele[2] <= top) {
                continue
            }
            else {
               stack.push(ele[2])
            }
        }

        return stack.length
    }
}
