V1:
- create new empty string
- iterate through orrigional string backwards
- concat item to new string (BAD TIME COMPLEXITY)
- compare old string === new string

V2:
- store everything in empty array => then array.join() (BETTER TIME COMPLEXITY)

V3: Recursion
- startPointer & end pointer
- is first letter = last letter => move in 