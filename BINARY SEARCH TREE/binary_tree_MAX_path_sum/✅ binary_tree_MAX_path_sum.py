class Solution(object):
    def maxPathSum(self, root):
        self.max_so_far = float('-inf')
        self.helper(root) # Maximum sum starting from root
        return self.max_so_far
        
    def helper(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root == None:
            return 0
        lresult = self.helper(root.left) # Maximum sum starting from root.left
        rresult = self.helper(root.right) # Maximum sum starting from root.left
        self.max_so_far = max(max(lresult, 0) + max(rresult, 0) + root.val, self.max_so_far)
        return max(lresult, rresult, 0) + root.val # Return maximum sum starting from root