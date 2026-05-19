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
        if (!preorder.length || !inorder.length) return null;

        const root = new TreeNode(preorder[0]);
      

        const rootIndex = inorder.indexOf(root.val);

        const leftInOrder = inorder.slice(0, rootIndex);
        const rightInOrder = inorder.slice(rootIndex+1);

        const leftNodeSize = leftInOrder.length;

        const leftPreOrder = preorder.slice(1, leftNodeSize+1);
        const rightPreOrder = preorder.slice(leftNodeSize+1);

  

        root.left = this.buildTree( leftPreOrder, leftInOrder)
        root.right = this.buildTree( rightPreOrder, rightInOrder)

        return root
    }
}
