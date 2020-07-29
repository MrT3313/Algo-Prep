// CLASSES
// - 1 - Node
class Node {
    constructor( value, next = null ) {
        this.value = value
        this.next = next
        this.uniqueID = new Date().valueOf()
    }
}

// - 2 - LinkedList
class LinkedList {
    constructor( head = null, tail = null ) {
        this.head = head
        this.tail = tail
        this.size = 0
    }
}

// PROTOTYPES
// A) Generic Methods
// A1 - Contains
    LinkedList.prototype.contains = function(val = null, index = null) {
        // Variables
        prev = undefined
        current = this.head
        idxCounter = 0

        // Edge Case
        if (val === null && index === null) {
            throw 'Please pass target'
        }

        // Logic
        while (current !== null) {
            if (val && !index) {            // Looking for VALUE
                if (current.value === val) { return [prev, current]}
            } else if (!val && index) {     // Looking for INDEX
                if (idxCounter === index) { return [prev, current] }
            }
            prev = current                  // Increment Prev Node
            current = current.next          // Increment Current node
        }
        return -1
    }
// A2 - PrintList
    LinkedList.prototype.printList = function() {
        // Setup
        let list = []
        current = this.head

        // Logic
        while (current !== null) {
            list.push(current.value)
            current = current.next
        }
        return list
    }

// B) Action Methods
// B1 - SetHead 
    LinkedList.prototype.setHead = function(newNode) {
        // Edge Case
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }
    
        // Logic
        newNode.next = this.head            // Point newNode to current head
        this.head = newNode                 // Update this.head to be newNode
    
        this.size += 1                      // Increment Size 
    }

// B2 - SetTail 
    LinkedList.prototype.setTail = function(newNode) {
        // Edge Case
        if (!this.head) {
            this.setHead(newNode)
            return this
        }

        // Logic 
        this.tail.next = newNode            // Point tail node to new node
        this.tail = newNode                 // Update tail node to new node
        this.tail.next = null               // Update tail.next value to null

        this.size += 1                      // Increment Size 
    }

// B3.2 - InsertPosition
    LinkedList.prototype.insertPosition = function(nodeToInsert, position, current) {
        /* 
            position => STR
                - before
                - after
            current => ARRAY
                [ prevNode, currentNode ]
        */

        // Variables
        prevNode = current[0]
        currentNode = current[1]

        // Edge Case(s)
        if (currentNode === this.head && position === 'before') {         // Replace Head
            console.log('this happened')
            this.setHead(nodeToInsert)
            return this
        }
        if (currentNode === this.tail && position === 'after') {          // Replace Tail
            this.setTail(nodeToInsert)
            return this
        }
        
        // Logic
        if (position === 'after') {
            nodeToInsert.next = currentNode.next
            currentNode.next = nodeToInsert
        } 

        if (position === 'before') {
            prevNode.next = nodeToInsert
            nodeToInsert.next = currentNode
        }

        return this
    }

// B3.1 - Insert
    LinkedList.prototype.insert = function(nodeToInsert, val=null, idx=null, position=null) {
        /*  Docs
            position => STR
                - before
                - after
        */
        // Variables
        target = undefined
        
        // Logic
        if (!val && !idx) {                                                                     // Default Insert => setTail
            this.setTail(nodeToInsert)
            return this
        } else if (val && !idx && (position === 'before' || position === 'after')) {            // Value Insert
            target = val
        } else if (!val && idx && (position === 'before' || position === 'after')) {            // Index Insert
            target = idx
        } else {
            throw "Invalid Parameters"
        }

        current = this.contains(val=target, idx=null)
        if (current !== -1) {
            this.insertPosition(nodeToInsert, position, current)
        } else {
            console.log(current, val, idx)
            return -1
        }

        return this
    }

// B4 - Remove   
    LinkedList.prototype.remove = function(val=null, idx=null) {
        // Variables
        current = this.contains(val, idx)
        
        // Edge Case(s)
        if (!this.head) { return -1 }
        if (current === -1) { return -1 }     // Value or Index not found 
        
        // Variables
        prevNode = current[0]
        foundNode = current[1]

        // Edge Case(s)
        if (foundNode === this.head) {
            console.log('Deleting Head Node')
            nextNode = foundNode.next
            this.head = nextNode
        } else if (foundNode === this.tail) {
            console.log('Deleting Tail Node')
            prevNode.next = null
            this.tail = prevNode
        } else { prevNode.next = foundNode.next }
 
    }
    
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// Initialization
let insertTest = new LinkedList()

// Generic Insert
insertTest.insert(new Node(10))
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(20))
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(30))
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)

// Value Insert
insertTest.insert(new Node(40), val=20, idx=null, position='after')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(40), val=5000, idx=null, position='after')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(50), val=20, idx=null, position='before')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(60), val=10, idx=null, position='before')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(70), val=60, idx=null, position='after')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(80), val=30, idx=null, position='after')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.insert(new Node(90), val=80, idx=null, position='before')
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)

// Index Insert
// ... 

// SetHead & SetTail
insertTest.setHead(new Node(100))
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.setTail(new Node(110))
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)

// Remove
insertTest.remove(val=50, idx=null)
insertTest.remove(val=20, idx=null)
insertTest.remove(val=70, idx=null)
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.remove(val=100, idx=null)
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.remove(val=110, idx=null)
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)
insertTest.remove(val=500, idx=null)
console.log(insertTest.printList(), insertTest.head.value, insertTest.tail.value)