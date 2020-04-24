class Node(object):
    def __init__(self, val, key=None):
        self.next = None
        self.prev = None
        self.val = val
        self.key = key
        
    def __repr__(self):
        return "val:" + str(self.val)
    
class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.head = Node('H')
        self.tail = Node('T')
        # H <-> T
        self.head.next = self.tail
        self.tail.prev = self.head
        self.map = {}
        self.size = 0
        
    def __str__(self):
        result = str(self.map) + '\n'
        node = self.head
        while node is not None:
            if node == self.tail:
                result += str(node.val)
            else:
                result += str(node.val) + "-"
            node = node.next
        return result
        
    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        if key not in self.map:
            return -1
        else:
            node = self.map[key]
            self.remove(node)            
            self.move_to_front(node)
            return node.val


    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        if key not in self.map:
            # Insert
            node = Node(value, key)
            self.move_to_front(node)
            self.map[key] = node
            self.size += 1
            if self.size > self.capacity:
                node_to_remove = self.tail.prev
                del self.map[node_to_remove.key]
                self.remove(node_to_remove)
                self.size -= 1
        else:
            # Set
            node = self.map[key]
            node.val = value
            self.remove(node)
            self.move_to_front(node)
            
    def move_to_front(self, node):
        # BEFORE: H <-> N1 <-> N2 <-> T
        # NODE: N
        # AFTER: H <-> N <-> N1 <-> N2 <-> T
        node_1 = self.head.next
        
        self.head.next = node
        node.prev = self.head
        
        node.next = node_1
        node_1.prev = node
            
    def remove(self, node):
        # BEFORE: H <-> N1 <-> N <-> N2 <-> T
		# NODE: N
        # AFTER: H <-> N1 <-> N2 <-> T
        node_1 = node.prev
        node_2 = node.next
        node_1.next = node_2
        node_2.prev = node_1
        node.next = None
        node.prev = None