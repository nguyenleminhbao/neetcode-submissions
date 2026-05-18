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

    height(root) {
        if(!root) return 0;

        let left = this.height(root.left);
        let right = this.height(root.right);

        return 1 + Math.max(left, right)
    }
    
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return 0;

        let leftH = this.height(root.left);
        let rightH = this.height(root.right); 

        let diameterRoot = leftH + rightH; 

        const diameterLeftSub = this.diameterOfBinaryTree(root.left); 
        const diameterRightSub = this.diameterOfBinaryTree(root.right);

        return Math.max(diameterRoot, diameterLeftSub, diameterRightSub) 
    }
}
