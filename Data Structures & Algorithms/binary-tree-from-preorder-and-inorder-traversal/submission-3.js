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
        if(!preorder.length || !inorder.length) return null; 

        const root = new TreeNode(preorder[0]);

        const midIndex = inorder.indexOf(root.val);

        const leftInorder = inorder.slice(0, midIndex);
        const rightInorder = inorder.slice(midIndex +1); 

        const leftNodeSize = leftInorder.length; 

        const leftPreorder = preorder.slice(1, leftNodeSize+1);
        const rightPreorder = preorder.slice(leftNodeSize+1); 

        root.left = this.buildTree(leftPreorder, leftInorder)
        root.right = this.buildTree(rightPreorder, rightInorder)

        return root
    }
}
