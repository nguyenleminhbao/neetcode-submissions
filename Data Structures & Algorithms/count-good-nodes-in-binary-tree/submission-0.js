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
   

    dfs(root, maxCurrentPath) {
        if (!root) return 0;

        let count = 0;

        if(root.val >= maxCurrentPath)
        {
            count +=1;
        }

        maxCurrentPath = Math.max(maxCurrentPath, root.val);

        count += this.dfs(root.left, maxCurrentPath, count)
        count += this.dfs(root.right, maxCurrentPath, count)

        return count
      
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        
       

        return  this.dfs(root, root.val)
    }
}
