/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    dfs(root, k, arr) {
        if (!root) return;

        const max = Math.max(...arr);
        if (arr.size >= k && root.val < max) {
            arr.delete(max);
        }
        if (arr.size < k && root.val !== null) arr.add(root.val);

        this.dfs(root.left, k, arr);
        this.dfs(root.right, k, arr);
    }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(!root) return 0; 

        const arr= new Set(); 

        this.dfs(root, k, arr); 

        const newArrr = Array.from(arr).sort((a, b) => a-b)

        return newArrr[newArrr.length -1]
    }
}
