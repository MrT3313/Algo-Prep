# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution: 
    def height(self, node): 
        # Base Case
        if node is None:
            return 0 

        # Return
        return 1 + max(self.height(node.left), self.height(node.right))

    def diameterOfBinaryTree(self, root):
        # Base Case
        if root is None:
            return 0

        # Get Heights
        l_height = self.height(root.left)
        r_height = self.height(root.right)

        # Get Diameter
        l_diameter = self.diameterOfBinaryTree(root.left)
        r_diameter = self.diameterOfBinaryTree(root.right)

        # Return Max
        return max(l_height + r_height + 1, max(l_diameter, r_diameter))


        

 