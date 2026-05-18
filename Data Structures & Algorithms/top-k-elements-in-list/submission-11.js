class Solution {

    findIndex(obj, target) {
        const keys = Object.keys(obj)

        for(let key of keys) {
            if (obj[key] === target) return key
        }

        return undefined
    }


    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let numMaps = {}

       for(let i = 0 ; i < nums.length; i ++) {
          if (!numMaps[nums[i]]) {
            numMaps[nums[i]]= 0
          }

          const count = numMaps[nums[i]]
          numMaps[nums[i]] = count +1 

       }

        const values = Object.values(numMaps).sort((a,b)=> b-a)

        const newValues = values.splice(0, k)

        const result = []
        for(let value of newValues) {
            const index = this.findIndex(numMaps, value)
            result.push(index)
            delete numMaps[index]
        }
  
        return result
    }
}
