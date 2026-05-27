class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if (position.length === 0) return 0;

        let times = [];

        for (let i = 0; i < position.length; i++) {
            const time = (target - position[i]) / speed[i];
            times.push([position[i], time]);
        }

        times.sort((a, b) => b[0] - a[0]);

        console.log(times)

        let result = 1;
        const stack = [times[0][1]];

        for (let [_, time] of times) {
            const top = stack[stack.length - 1];

            if (time <= top) {
                continue;
            } else {
                stack.pop();
                stack.push(time);
                result++;
            }
        }

        return result;
    }
}
