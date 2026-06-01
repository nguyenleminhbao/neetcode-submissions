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

        let heightL = this.dfs(root.left, result);
        let heightR = this.dfs(root.right, result);

        if (Math.abs(heightL - heightR) <= 1) {
            result[0] = result[0] && true
        }
        else {
            result[0] = false; 
        }
        

        return Math.max(heightL, heightR) + 1;
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
