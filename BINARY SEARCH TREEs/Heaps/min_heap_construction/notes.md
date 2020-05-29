# Heaps
Heaps = Binary Tree w/ two additional properties

1. all levels need sto be filled up completly --> last level filled up from left to right
2. Heap Property 
    - Min Heap: Every node in heap is smaller or equal to its children's node values --> ROOT NODE = ALWAYS smallest
    - Max Heap: Every node in heap is greater to or equal to its children's node values --> ROOT NODE = ALWAYS largest

- Heaps are NOT sorted

# Formula to find children / parents

Current Node = i
child_one = 2i + 1
child_two = 2i + 2

parentNode = floor( ( i - 1 ) / 2 )

          8 
        /   \
      12     23
     /  \   /  \
   17   31 30  44 
  /  \
 102  18

Array Representation 

Index:      [   0, 1,  2,  3,  4,  5,  6,  7,   8   ]
Heap Array: [   8, 12, 23, 17, 31, 30, 44, 102, 18  ]

