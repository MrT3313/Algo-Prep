class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def bstFromPreorder2(self, preorder):
        """
        need to be BST
        scan the list to break left and right part
        F(n) = 2 F(n/2) + O(n), then it is O(n log n)
        Make it O(n)
        maintain a stack
        After walking through example, left child can be determined quickly
        since it is pre-order. Left comes first.
        Stack maintain a node that is missing right child
        decreasing stack
        """
        root = TreeNode(preorder[0])
        stk = [root]
        for a in preorder[1:]:
            node = TreeNode(a)
            if a < stk[-1].val:  # len(stk) always >= 1
                stk[-1].left = node
            else:
                while len(stk) >= 2 and stk[-2].val < a:
                    stk.pop()

                stk[-1].right = node
                stk.pop()

            stk.append(node)

        return root

    def bstFromPreorder(self, preorder):
        """
        If a node is a right child (larger), find the proper parent
        The proper parent should the deepest in the stack that its val < current val
        """
        root = TreeNode(preorder[0])
        stk = [root]
        for a in preorder[1:]:
            node = TreeNode(a)
            if a < stk[-1].val:
                stk[-1].left = node
            else:
                while stk and stk[-1].val < a:
                    pi = stk.pop()
                pi.right = node
            stk.append(node)
            
        return root