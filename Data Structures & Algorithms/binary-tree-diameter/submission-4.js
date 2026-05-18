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
        if (!root) return 0;

        let left = 1 + this.height(root.left);
        let right = 1 + this.height(root.right);

        return Math.max(left, right)
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return 0; 

        const leftH = this.height(root.left);
        const rightH = this.height(root.right);

        console.log(leftH, rightH)
        let diameter = leftH + rightH;
        let sub = Math.max(
            this.diameterOfBinaryTree(root.left),
            this.diameterOfBinaryTree(root.right),
        );
        return Math.max(diameter, sub);

       
    }
}
