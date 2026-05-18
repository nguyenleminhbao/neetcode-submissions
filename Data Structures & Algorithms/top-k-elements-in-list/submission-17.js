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
    // topKFrequent(nums, k) {
    //    let numMaps = {}

    //    for(let i = 0 ; i < nums.length; i ++) {

    //       numMaps[nums[i]] = (numMaps[nums[i]] || 0) +1 

    //    }

    //     const values = Object.values(numMaps).sort((a,b)=> b-a)

    //     const newValues = values.splice(0, k)

    //     const result = []
    //     for(let value of newValues) {
    //         const index = this.findIndex(numMaps, value)
    //         result.push(index)
    //         delete numMaps[index]
    //     }
  
    //     return result
    // }


    topKFrequent(nums, k) {
       let numMaps = {}

       for(let i = 0 ; i < nums.length; i ++) {

          numMaps[nums[i]] = (numMaps[nums[i]] || 0) +1 

       }

       const newEntries = Object.entries(numMaps)
    

       const sortedNewEntries = newEntries.sort((a,b)=>b[1] - a[1]).splice(0,k).map(ele=>ele[0])
        



       return sortedNewEntries
    }
}
