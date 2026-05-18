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

    height(root, diameter) {
        if (!root) return 0;

        let left =  this.height(root.left, diameter);
        let right =  this.height(root.right, diameter);

        diameter[0] = Math.max(diameter[0], left + right)

        return 1 + Math.max(left, right)
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return 0; 

        let diameter = [0]

        this.height(root, diameter)

        return diameter[0];

       
    }
}
