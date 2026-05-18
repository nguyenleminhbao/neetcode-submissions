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
    dfs(root, result, depth) {
        if(!root) return ; 

        if (!result[depth]) {
            result[depth] = []
        }

        result[depth].push(root.val);

        this.dfs(root.left, result, depth + 1);
         this.dfs(root.right, result, depth + 1);
    }
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const result = []
        this.dfs(root, result, 0);

        return result
    }
}
