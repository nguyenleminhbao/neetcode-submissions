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

    dfs(root, depth, result) {
        if(!root) return; 

        if(!result[depth]) {
            result[depth] = []
        }

        result[depth].push(root.val)
        
        this.dfs(root.left, depth +1, result);
        this.dfs(root.right, depth +1, result);

    }

    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        const depth = 0; 

        this.dfs(root, depth, result);

        return result
    }
}
