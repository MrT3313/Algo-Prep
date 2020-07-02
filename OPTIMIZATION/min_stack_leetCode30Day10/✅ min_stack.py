class MinStack:
    def __init__(self):
        self.mainStack = []
        self.altStack = []
        

    def push(self, x: int) -> None:
        if len(self.mainStack) == 0:
            self.mainStack.append(x)
            self.altStack.append(x)
        else:
            print(x, "--", self.altStack[-1])
            if x < self.altStack[-1]:
                self.mainStack.append(x)
                self.altStack.append(x)
            else:
                self.mainStack.append(x)
                self.altStack.append(self.altStack[-1])
        
        # print('MAIN STACK: ',self.mainStack)
        # print('ALT STACK: ',self.altStack)

    def pop(self) -> None:
        self.mainStack.pop()
        self.altStack.pop()

    def top(self) -> int:
        return self.mainStack[-1]

    def getMin(self) -> int:
        return self.altStack[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()