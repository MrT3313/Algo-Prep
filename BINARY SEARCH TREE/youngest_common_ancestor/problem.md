You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor. The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor-- its ancestor property points to None / null), and the other two inputs are decendants in the ancestral tree.

Write a function that returns the youngest common ancestor to the two descendants. 

INPUT:

topAncestor = Node A
descendantOne = Node E
descendantTwo = Node I

          A
        /   \
       B      C
      /\      /\
     D  E    F  G  
    /\
   H  I 

OUTPUT:

B === youngest common ancestor