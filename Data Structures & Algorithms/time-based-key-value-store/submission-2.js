class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        const newVal = {
            value,
            timestamp,
        };

        const obj = this.keyStore.get(key);
        obj.push(newVal)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const obj = this.keyStore.get(key);
        if (!obj) return "";

        let left = 0; 
        let right = obj.length - 1;
        let searchObj = null;

        while(left <= right) {
            const mid = Math.trunc((left + right)/2); 

            const midVal = obj[mid];

            if(midVal.timestamp <= timestamp) {
                searchObj = midVal;
                left = mid + 1
            }
            else {
                right = mid - 1;
            }


        }

        return searchObj?.value || ""
    }
}
