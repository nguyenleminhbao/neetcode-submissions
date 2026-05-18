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
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        let diameter = 0;

        function dfs(node) {

            // base case
            if (!node) {
                return 0;
            }

            // lấy height bên trái
            const left = dfs(node.left);

            // lấy height bên phải
            const right = dfs(node.right);

            // cập nhật diameter lớn nhất
            diameter = Math.max(diameter, left + right);

            // trả height cho parent
            return 1 + Math.max(left, right);
        }

        dfs(root);

        return diameter;
    }
}