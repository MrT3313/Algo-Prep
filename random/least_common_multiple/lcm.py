def lcm(n1, n2):
    if n1 > n2:
        n1, n2 = n2, n1
    for x in range(n2, n1 * n2 + 1, n2):
        print(x)
        if x % n1 == 0:
            return x


print(lcm(9,18))
print(lcm(11,17))
print(lcm(8, 5))