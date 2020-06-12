Write a funciotn that takes in a non-empty array of distinct integers, constructs a BST from the integers, and returns the root of the BST. 

The function should minimize the height of the BST. 

You've been provided with a `BST` class that you'll have to use the construct of BST. 

Each `BST` node has an integer `value`, a `left` child node, and `right` child node. A node is said to be a valid `BST` node if and only if it satisfies the BST property: its `value` is strictly greater than the values of every node to its left; its `value` is less than or equal to the values of every node to its right; and its children nodes are either valid `BST` nodes themselves or `None` / `null`.

A BST is valid is and only if all of its nodes and valid `BST` nodes.

Note that the `BST` class already has an `insert` method which you can use if you want. 