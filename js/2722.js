// Input: 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output: 
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]

// Input: 
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output: 
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]

// Input: 
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let idMap = new Map();

    for (const obj of arr1) {
        idMap.set(obj.id, { ...obj })
    }

    for (const obj of arr2) {
        if (idMap.has(obj.id)) {
            const existingObject = idMap.get(obj.id);
            idMap.set(obj.id, { ...existingObject, ...obj })
        } else {
            idMap.set(obj.id, { ...obj })
        }
    }

    let combinedArray = Array.from(idMap.values()).sort((a, b) => a.id - b.id);
    return combinedArray;
};

let arr1, arr2;
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]

// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]

arr1 = [
    { "id": 1, "b": { "b": 94 }, "v": [4, 3], "y": 48 }
]
arr2 = [
    { "id": 1, "b": { "c": 84 }, "v": [1, 3] }
]

console.log(join(arr1, arr2));