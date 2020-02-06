class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def validateBst(tree):
    return validateBST_helper(tree, float("-inf"), float("inf"))

def validateBST_helper(tree, minValue, maxValue):
    if tree is None:
        return True
    if tree.value < minValue or tree.value >= maxValue:
        return False

    # check left subtree
    isLeftValid = validateBST_helper(tree.left, minValue, tree.value)
    # check right subtree & return both if everything is still valid 
    return isLeftValid and validateBST_helper(tree.right, tree.value, maxValue)