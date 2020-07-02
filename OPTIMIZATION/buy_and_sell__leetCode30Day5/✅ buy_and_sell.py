def maxProfit(prices):
    # Set Variable
    max_profit = 0 

    # Edge Case
    if len(prices) <= 1:
        return max_profit
    

    # Loop Through Prices
    for (i, price) in enumerate(prices):
        if price > prices[i - 1] and i != 0:
            max_profit += (price - prices[i - 1])

    # Return
    return max_profit

# print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([1,2,3,4,5]))
# print(maxProfit([7,6,4,3,1]))