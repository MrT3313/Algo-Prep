class Solution(object):
    def maxPathSum(self, root):
        self.answer = float('-inf')
        self.helper(root)
        return self.answer
    
    def max_path_sum(self, root, so_far, result):
        if root is None:
            return
        result[0] = max(result[0], so_far + root.val)
        self.max_path_sum(root.left, so_far + root.val, result)
        self.max_path_sum(root.right, so_far + root.val, result)
        return
    
    def helper(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root == None:
            return
        lresult, rresult = [float('-inf')], [float('-inf')]
        self.max_path_sum(root.left, 0, lresult) # Find maximum path sum starting from root.left
        self.max_path_sum(root.right, 0, rresult) # Find maximum path sum starting from root.right
        self.answer = max(max(lresult[0], 0) + max(rresult[0], 0) + root.val, self.answer)
        self.helper(root.left)
        self.helper(root.right)        
        return