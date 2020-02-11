def numberOfWaysToMakeChange(n, denoms):
    ways = [0 for amount in range(n + 1)]
    
    ways[0] = 1
    print(ways)

    for denom in denoms:
        print(f'Denom: {denom}')
        for amount in range(1, n +1):
            # print(f'Amount: {amount}')
            if denom <= amount:
                ways[amount] += ways[amount - denom]
        print(ways)
    return ways[n]

# print(numberOfWaysToMakeChange(6, [1,5]))
print(numberOfWaysToMakeChange(10, [1,5,10,25]))
