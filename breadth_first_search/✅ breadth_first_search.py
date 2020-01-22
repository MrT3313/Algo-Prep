class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def breadthFirstSearch(self, array):
        # Initialize Queue @ the top of the tree w/ self
        queue = [self]

        # While Loop
        while len(queue) > 0:
            # set current to the first item in the Queue => FIFO
            current = queue.pop(0)
        
            # Add current node to the final array being returned
            array.append(current.name)

            # Loop through all children of current node and add THEM to the Queue
            for child in current.children:
                queue.append(child)
        
        # Return final result
        return array

