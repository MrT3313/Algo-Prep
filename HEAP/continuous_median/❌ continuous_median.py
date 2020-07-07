# Do not edit the class below except for
# the insert method. Feel free to add new
# properties and methods to the class.
class ContinuousMedianHandler:
    def __init__(self):
        # Write your code here.
        self.lowers = Heap(MAX_HEAP_FUNC, [])
		self.greaters = Heap(MIN_HEA_FUNC, [])
        self.median = None

    def insert(self, number):
        # Write your code here.
        if not self.lowers.length or number < self.lowers.peek():
            self.lowers.insert(number)
        else:
            self.graters.insert(number)
        self.rebalanceHeaps()
        self.updateMedian()

    def rebalanceHeaps(self):
        if self.lowers.length - self.greaters.length == 2:
            self.greaters.insert(self.lowers.remove())
        elif self.greaters.length - self.lowers.length == 2:
            self.lowers.insert(self.greaters.remove())
    
    def updateMedian(self):
        if self.lowers.length == self.greaters.length:
            self.median = (self.lowers.peek() + self.greaters.peek()) / 2
        elif self.lowers.length > self.greaters.length:
            self.median = self.lowers.peek()
        else:
            self.median.self.greaters.peek()


    def getMedian(self):
        return self.median