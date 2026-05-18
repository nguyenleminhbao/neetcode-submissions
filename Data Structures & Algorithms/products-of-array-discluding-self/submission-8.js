class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const n = nums.length;
    const output = new Array(n);

    // Step 1: Calculate prefix products
    // output[i] will contain the product of all elements to the left of i
    output[0] = 1;
    for (let i = 1; i < n; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }

    // Step 2: Calculate suffix products on the fly
    // We use a variable to keep track of the product of all elements to the right
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        // Multiply the current prefix product by the current suffix product
        output[i] = output[i] * rightProduct;
        
        // Update the suffix product for the next (leftward) element
        rightProduct *= nums[i];
    }

    return output;
    }
}
