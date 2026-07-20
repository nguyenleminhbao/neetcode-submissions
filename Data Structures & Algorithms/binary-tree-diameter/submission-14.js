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

        const leftH = this.dfs(root.left, result); 
        const rightH = this.dfs(root.right, result);

        result[0] = Math.max(result[0], leftH + rightH) 

        return 1 + Math.max(leftH, rightH); 
    }


    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const result = [0]; 

        this.dfs(root, result)

        return result[0]
    }
}
