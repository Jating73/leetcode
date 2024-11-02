def tripletSum(arr, target):
    arr.sort()

    n = len(arr)

    for i in range(n - 2):
        left = i + 1
        right = n - 1

        while(left < right):
            currentSum = arr[i] + arr[left] + arr[right]

            if currentSum == target:
                return (arr[i], arr[left], arr[right])
            elif currentSum < target:
                left += 1
            else:
                right -= 1
    return "No Triplet Found"


arr = [1, 2, 3, 4]
target = 24


print(tripletSum(arr, target))

arr = [1, 2, 3, 4, 5, 6]
target = 10


print(tripletSum(arr, target))

