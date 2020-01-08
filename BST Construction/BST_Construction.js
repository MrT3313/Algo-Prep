class BST {
    // - 1 - // CONSTRUCTOR
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // - 2 - // METHODS
    insert(value) {

        // *** V1 *** //
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value)
            } else {
                this.right.insert(value)
            }
        }
        return this

        // *** V2 *** //
        // let currentNode = this
        // while (true) {
        //     if (value < currentNode.value) {
        //         if (currentNode.left === null) {
        //             currentNode.left = new BST(value)
        //             break
        //         } else {
        //             currentNode = currentNode.left
        //         } 
        //     } 
        //     else if (value > currentNode.value) {
        //         if (currentNode.right === null) {
        //             currentNode.right = new BST(value)
        //             break
        //         } else {
        //             currentNode = currentNode.right
        //         }
        //     }
        // }
        // return this
    }

    contains(value) {
        // *** V1 *** //
        if (value < this.value) {
            if (this.left === null) {
                return false
            } else {
                return this.left.contains(value)
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false
            } else {
                return this.right.contains(value)
            }
        } else {
            return true
        }

        // *** V2 *** //
        // let currentNode = this
        // while (currentNode !== null) {
        //     if (value < currentNode.value) {
        //         currentNode = currentNode.left

        //     } else if (value > currentNode.value)  {
        //         currentNode = currentNode.right

        //     } else {
        //         return true
        //     } 
        // }
        // return false
    }

    remove(value, parentNode = null) {
        // *** V1 *** //
        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this)
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this)
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue()
                this.right.remove(this.value, this)
            } else if (parentNode === null) {
                if (this.left !== null) {
                    this.value = this.left.value
                    this.right = this.left.right
                    this.left = this.left.left
                } else if (this.right !== null) {
                this.value = this.right.value
                this.left = this.right.left 
                this.right = this.right.right
                } else {
                    this.value = null
                }
            } else if (parent.left == this) {
                parent.left = this.left !== null ? this.left : this.right
            } else if (parent.right == this ) {
                parent.right = this.left !== null ? this.left : this.right
            }
        }
        return this


        // *** V2 *** //
    //     let currentNode = this
    //     while (currentNode !== null) {
    //         if (value > currentNode.value) {
    //             parentNode = currentNode
    //             currentNode = currentNode.left

    //         } else if (value < currentNode.value) {
    //             parentNode = currentNode
    //             currentNode = currentNode.right
    //         } else {
    //             // HAS 2 children
    //             if (currentNode.left !== null && currentNode.right !== null) {
    //                 currentNode.value = currentNode.right.getMinValue() // currentNode.value === smallest value of the right subtree
    //                 currentNode.right.remove(currentNode.value, currentNode) // currentNode is passed in as the new parentNode
    //             }

    //             // NO PARENT NODE
    //             else if (parentNode === null) {
    //                 if (currentNode.left !== null) {
    //                     currentNode.value = currentNode.left.value
    //                     currentNode.right = currentNode.left.right
    //                     currentNode.left = currentNode.left.left
    //                 } else if (currentNode.left !== null) {
    //                     currentNode.value = currentNode.right.value
    //                     currentNode.left = currentNode.right.left 
    //                     currentNode.right = currentNode.right.right
    //                 } else {
    //                     currentNode.value = null
    //                 }
    //             }

    //             // WE KNOW IT IS NOT THE ROOT NODE --> we have a parent node
    //             else if (parentNode.left === currentNode) { // we have FOUND that the node we are trying to delete is currently the LEFT child of the currentNode
    //                 if (currentNode.left !== null) {
    //                     parentNode.left = currentNode.left 
    //                 } else {
    //                     parentNode.left = currentNode.right 
    //                 }
    //             } else if (parentNode.right === currentNode) {
    //                 if (currentNode.left !== null) {
    //                     parentNode.right = currentNode.left 
    //                 } else {
    //                     parentNode.right = currentNode.right 
    //                 }
    //             }

    //             break
    //         }
    //     }
    // return this
    }

    // HELPER METHODS
    getMinValue() {
        // *** V1 *** //
        if (this.left === null ) {
            return this.value
        } else {
            return this.left.getMinValue()
        }

        // *** V2 *** //
        // currentNode = this
        // while (currentNode.left !== null) {
        //     currentNode = currentNode.left
        // }
        // return currentNode.value
    }
}

let test_BST_class = new BST(12)
console.log(test_BST_class)