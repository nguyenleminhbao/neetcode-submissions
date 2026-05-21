class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((point)=> point[2]); 

        for(let point of points) {
            const [x, y] = point; 

            const distance = x*x + y*y; 

            minHeap.enqueue([x,y, distance])
        }

        const arr = [];
        
        for(let i = 1; i<= k ; i++) {
            arr.push(minHeap.dequeue())
        }

        return arr.map(ele=>[ele[0], ele[1]])
    }
}
