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

        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (!root) return 0;

        let heightL = this.height(root.left);
        let heightR = this.height(root.right);

        const diameterRoot = heightL + heightR;

        const diameterLeft = this.diameterOfBinaryTree(root.left);
        const diameterRight = this.diameterOfBinaryTree(root.right);

        return Math.max(diameterRoot, diameterLeft, diameterRight)
    }
}
