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

    dfs(root, result) {
        if(!root) return 0;

        let left = this.dfs(root.left, result);
        let right = this.dfs(root.right, result); 

        result[0] = Math.abs(left - right) <= 1 && result[0]

        return 1 + Math.max(left, right);
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true;

        const result = [true];

        this.dfs(root, result); 

        return result[0]
    }
}
