You are given a Node class that has a name and an array of optional children Nodes. When put together, Nodes form a simple tree-like structure. Implement a depthFirstSearch method on the Node class, which takes in an empty array, traverse the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all the of the Nodes' names in the input array, and returns it


      A
     /|\
    B C D
   /\
  E  F


output: ["A","B","E","F","C","D"]