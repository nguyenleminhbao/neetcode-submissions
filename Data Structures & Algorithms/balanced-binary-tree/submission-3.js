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

        const left = this.dfs(root.left, result); 
        const right = this.dfs(root.right, result);
        console.log( "left", left, "right", right)
        console.log("abs", Math.abs(left-right))

        result[0] = Math.abs(left-right) <= 1 && result[0];

        return 1 + Math.max(left, right);
    }


    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true

        const result = [true];

        this.dfs(root, result)

        return result[0]
    }
}
