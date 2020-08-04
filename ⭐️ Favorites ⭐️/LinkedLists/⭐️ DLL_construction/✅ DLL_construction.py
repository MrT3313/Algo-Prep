# CLASSES
## - 1 - Node
class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

## - 2 - DLL
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def setHead(self, node):
        if self.head is None:
            self.head = node
            self.tail = node
            return
        self.insertBefore(self.head, node)

    def setTail(self, node):
        if self.tail is None:
            self.setHead(node)
            return
        self.insertAfter(self.tail, node)

    def insertBefore(self, node, nodeToInsert):
        # Edge Case
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)

        nodeToInsert.prev = node.prev
        nodeToInsert.next = node

        if node.prev is None:
            self.head = nodeToInsert
        else:
            node.prev.next = nodeToInsert
        
        node.prev = nodeToInsert
        

    def insertAfter(self, node, nodeToInsert):
        # Edge Case
        if nodeToInsert == self.head and nodeToInsert == self.tail:
            return
        self.remove(nodeToInsert)

        nodeToInsert.next = node.next
        nodeToInsert.prev = node

        if node.next is None:
            self.tail = nodeToInsert
        else:
            node.next.prev = nodeToInsert
		node.next = nodeToInsert

    def insertAtPosition(self, position, nodeToInsert):
        if position == 1:
            self.setHead(nodeToInsert)
            return
        
        node = self.head
        currentPosition = 1

        while node is not None and currentPosition != position:
            node = node.next
            currentPosition += 1
        
        if node is not None:
            self.insertBefore(node, nodeToInsert)
        else:
            self.setTail(nodeToInsert)

    def removeNodesWithValue(self, value):                  
        node = self.head
        while node is not None:
            nodeToRemove = node
            node = node.next

            if nodeToRemove.value == value:
                self.remove(nodeToRemove)


    def remove(self, node):                                 # Helper -- once you know the node you can use this default for the actual removal
        # Edge Cases -- Head & Tail Nodes
        if node == self.head:
            # Update Head Node
            self.head = self.head.next

        if node == self.tail: 
            # Update Tail Node
            self.tail = self.tail.prev 

        # Remove Bindings
        self.removeNodeBindings(node)
    
    def removeNodeBindings(self, node):
        # Update PREV node NEXT 
        if node.prev is not None:
            node.prev.next = node.next

        # Update NEXT node PREV
        if node.next is not None:
            node.next.prev = node.prev
        
        # Remove CURR node PREV
        node.prev = None
        # Remove CURR node NEXT
        node.next = None

    def containsNodeWithValue(self, value):                 # Search => true / false
        # Set starting node
        node = self.head

        ## V2
        # while node is not None and node.value != value:
        #     node = node.next
        # return node is not None

        ## V1
        # Loop
        while node is not None:

            # Check Value
            if node.value == value:
                return True
            # Traverse Linked List
            else: 
                node = node.next

        # No Value Value
        return False