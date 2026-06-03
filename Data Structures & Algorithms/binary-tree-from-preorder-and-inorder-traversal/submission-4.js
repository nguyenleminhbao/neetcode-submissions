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
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0) return null;

        const root = preorder[0];
        const indexRootInorder = inorder.indexOf(root);

        const node = new TreeNode(root);

        const inorderLeft = inorder.slice(0, indexRootInorder);
        const inorderRight = inorder.slice(indexRootInorder + 1);

        const treeLeftLength = inorderLeft.length;

        const preorderLeft = preorder.slice(1, treeLeftLength + 1);
        const preorderRight = preorder.slice(treeLeftLength + 1);

        node.left = this.buildTree(preorderLeft, inorderLeft);
        node.right = this.buildTree(preorderRight, inorderRight);

        return node;
    }
}
