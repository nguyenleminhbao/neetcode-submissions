class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        if (points.length === 0) return [];

        const heap = new MinPriorityQueue((point)=>point[1]);

        for (let point of points) {
            const [x, y] = point;
            const distance = x * x + y * y;

            heap.enqueue([point, distance]);
        }

        const arr = [];

        while (arr.length < k) {
            const value = heap.dequeue();
            
            arr.push(value[0])
        }

        return arr;
    }
}
