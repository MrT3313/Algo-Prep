def search(nums, target):
    if not nums:
        return -1
    start, end = 0, len(nums) - 1
    while start + 1 < end:
        mid = start + (end - start) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] > nums[start]:
            if nums[start] <= target and nums[mid] > target:
                end = mid
            else:
                start = mid
        else:
            if nums[mid] < target and nums[end] >= target:
                start = mid
            else:
                end = mid

    if nums[start] == target:
        return start
    if nums[end] == target:
        return end
    return -1   
