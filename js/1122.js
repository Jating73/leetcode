/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = new Map();

    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i]) + 1)
        } else {
            map.set(arr1[i], 1)
        }
    }

    let trackIndex = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr2[trackIndex])) {
            arr1[i] = arr[trackIndex];
            let value = map.get(arr2[trackIndex])
            if (value === 1) {
                map.delete(arr2[trackIndex])
                trackIndex++;
            } else {
                map.set(arr2[trackIndex], value - 1)
            }
        }
    }
};

let arr1, arr2;

arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]

console.log(relativeSortArray(arr1, arr2))

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:
// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]