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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const queue = [root];
        const result = [];

        while (queue.length) {
            const list = [];
            const length = queue.length;

            for (let i = 0; i < length; i++) {
                const node = queue.shift();
                list.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(list);
        }

        return result;
    }
}
