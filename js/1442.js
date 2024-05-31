/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
    let n = arr.length;
    let prefixXor = new Array(n + 1).fill(0);

    // Compute prefix XOR array
    for (let i = 0; i < n; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }

    let count = 0;

    // Iterate over all possible pairs (i, k)
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (prefixXor[i] == prefixXor[k + 1]) {
                // Add (k - i) to the count
                count += (k - i);
            }
        }
    }

    return count;
};


// Example 1:
// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

// Example 2:
// Input: arr = [1,1,1,1,1]
// Output: 10