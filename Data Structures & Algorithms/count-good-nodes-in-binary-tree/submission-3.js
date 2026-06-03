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

    dfs(root, max, count) {
        if(!root) return; 

        max = Math.max(max, root.val);

        if(root.val >= max) {
            count[0] += 1;
        }

        this.dfs(root.left, max, count);
        this.dfs(root.right, max, count);
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if(!root) return 0;

        const count = [0];
        const max = root.val;

        this.dfs(root, max, count); 

        return count[0]
    }
}
