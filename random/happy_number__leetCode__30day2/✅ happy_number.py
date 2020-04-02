def happy_numbers(n, seen=None):
    # Make set if first run of function
    if seen is None:
        seen = set()

    # BASE CASE
    if n == 1:
        return True
    print(seen)
    if n in seen:
        return False
    
    # Reset loop result 
    result = 0
    # Update seen set
    seen.add(n)

    # Get individual digits
    list_of_ints = [int(d) for d in str(n)]
    print(list_of_ints)

    # Loop through numbers
    for k in list_of_ints:
        result += k**2

    # RECURSE
    print('Result: ', result)
    return happy_numbers(result, seen)


result = happy_numbers(2)
# result = happy_numbers(19)
result = happy_numbers(10)
# result = happy_numbers(139)
# result = happy_numbers(2183)
print(result)


