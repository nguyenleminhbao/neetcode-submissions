class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

      const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = []; // Lưu các index

    for (let i = 0; i < n; i++) {
        // Trong khi ngày hiện tại ấm hơn ngày ở đỉnh stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex; // Khoảng cách giữa 2 ngày
        }
        // Đẩy index ngày hiện tại vào stack để chờ ngày ấm hơn trong tương lai
        stack.push(i);
    }

    return result;
    }
}
