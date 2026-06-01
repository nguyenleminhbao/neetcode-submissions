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

    dfs(root, diameter) {
        if (!root) return 0;

        let heightL = this.dfs(root.left, diameter);
        let heightR = this.dfs(root.right, diameter);

        diameter[0] = Math.max(diameter[0], heightL + heightR); 

        return Math.max(heightL , heightR) + 1


    }


    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return 0; 
        const diameter = [0]; 

        this.dfs(root, diameter);

        return diameter[0]
    }
}
