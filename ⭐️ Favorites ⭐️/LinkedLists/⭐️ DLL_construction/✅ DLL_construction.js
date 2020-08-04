// CLASSES
// - 1 - Node
class Node {
    constructor( value, next = null, prev = null) {
        this.value = value
        this.next = next 
        this.prev = prev
    }
}

// - 2 - DLL
class DLL {
    constructor( head = null, tail = null) {
        this.head = head
        this.tail = tail
        this.size = 0
    }
}

// EXPORTS
module.exports = {
    Node,
    DLL
}


// PROTOTYPES
// A) Generic Methods
// A1 - Contains
DLL.prototype.contains = function(val = null) {
    // Variables
    prev = undefined
    current = this.head

    // Edge Case
    if (val === null) {
        throw 'Please pass target value'
    }

    // Logic
    while (current !== null) {
        if (current.value === val) {
            return [prev, current]
        }
        prev = current
        current = current.next
    }
    return -1
}

// A2 - PrintList
DLL.prototype.printList = function( ){
    // Setup
    let list = []
    current = this.head

    while (current !== null) {
        list.push(current.value)
        current = current.next
    }
    return list
}

// B) Action methods
// B1 - SetHead
DLL.prototype.setHead = function(newNode) {
    // Edge Case
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
        return this
    }

    // Logic
    newNode.prev = this.head.prev
    newNode.next = this.head
    this.head.prev = newNode
    
    this.head = newNode
    this.size += 1
    
return this}

// B2 - SetTail
DLL.prototype.setTail = function(newNode) {
    // Edge Case
    if (!this.head) {
        this.setHead(newNode)
        return this
    }

    // Logic
    newNode.prev = this.tail
    this.tail.next = newNode
    newNode.next = null

    this.tail = newNode
    console.log(this.printList(), this.head, this.tail)
    this.size += 1 
    
return this}

// B2.2 - InsertPosition
DLL.prototype.insertPosition = function(nodeToInsert, position, current) {
    // Variables
    prevNode = current[0]
    currentNode = current[1]

    // Edge Case
    if (currentNode === this.head) {
        this.setHead(nodeToInsert)
        return this
    }
    if (currentNode === this.tail) {
      console.log('here')
        this.setTail(nodeToInsert)
        return this
    }

    // Logic
    if (position === 'after') {
        currentNode.next.prev = nodeToInsert
        nodeToInsert.next = currentNode.next
        currentNode.next = nodeToInsert
        nodeToInsert.prev = currentNode
    }
    if (position === 'before') {
        currentNode.prev.next = nodeToInsert
        nodeToInsert.prev = currentNode.prev
        nodeToInsert.next = currentNode
        currentNode.next.prev = nodeToInsert
    }
    return this
}

// B2.1 - Insert
DLL.prototype.insert = function(nodeToInsert, val = null, position = null) {
    if (!val) {
        throw "Please pass target value"
    }
    current = this.contains(val)
    this.insertPosition(nodeToInsert, position, current)

    return this
}

// B3 - Remove
DLL.prototype.remove = function(val = null) {
    // Variables
    current = this.contains(val)
    current

    // Edge Case
    if(!this.head) { return -1 }
    if (current === -1) { return -1 }

    // Variables
    prevNode = current[0]
    foundNode = current[1]

    // Edge Case
    if (foundNode === this.head) {
        foundNode.prev = null
        this.head = foundNode.next
    } else if (foundNode === this.tail) {
        prevNode.next = null
        this.tail = prevNode
    } else { 
        prevNode.next = foundNode.next
        foundNode.next.prev = prevNode
    }
    return this
}


// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //

let DLL_test = new DLL()

// Set Head
DLL_test.setHead(new Node(10))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.setHead(new Node(20))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.setHead(new Node(30))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)

// SetTail
DLL_test.setTail(new Node(40))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.setTail(new Node(50))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.setTail(new Node(60))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)

// Contains
console.log(DLL_test.contains(10))

// Insert
DLL_test.insert(new Node(100), 40, 'before')
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.insert(new Node(200), 40, 'after')
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.insert(new Node(300), 30, 'before')
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.insert(new Node(400), 60, 'after')
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)

DLL_test.setHead(new Node(500))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.setTail(new Node(600))
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)

// Remove
DLL_test.remove(600)
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.remove(500)
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)
DLL_test.remove(40)
DLL_test.remove(100)
DLL_test.remove(200)
console.log(DLL_test.printList(), DLL_test.head.value, DLL_test.tail.value)