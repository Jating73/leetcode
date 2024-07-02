// Optimal Approach
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
    // Sort the positions array
    position.sort((a, b) => a - b);

    // Helper function to check if we can place m balls with at least `minForce` distance apart
    function canPlaceBalls(minForce) {
        let count = 1;
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= minForce) {
                count++;
                lastPosition = position[i];
                if (count >= m) return true;
            }
        }
        return false;
    }

    // Binary search for the maximum minimum force
    let left = 1; // Minimum possible force
    let right = position[position.length - 1] - position[0]; // Maximum possible force
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canPlaceBalls(mid)) {
            answer = mid; // Mid is a valid candidate
            left = mid + 1; // Try for a bigger minimum force
        } else {
            right = mid - 1; // Try for a smaller minimum force
        }
    }

    return answer;
}

// Brute Force Approach - TLE
/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
// var maxDistance = function (position, m) {
//     // Sort the positions array
//     position.sort((a, b) => a - b);

//     // Helper function to generate all combinations of size m
//     function generateCombinations(arr, m) {
//         const result = [];
//         function combine(tempArr, start) {
//             if (tempArr.length === m) {
//                 result.push([...tempArr]);
//                 return;
//             }
//             for (let i = start; i < arr.length; i++) {
//                 tempArr.push(arr[i]);
//                 combine(tempArr, i + 1);
//                 tempArr.pop();
//             }
//         }
//         combine([], 0);
//         return result;
//     }

//     // Generate all combinations of size m from position
//     const combinations = generateCombinations(position, m);

//     let maxMinForce = 0;

//     // Calculate the minimum force for each combination
//     for (const combination of combinations) {
//         let minForce = Infinity;
//         for (let i = 1; i < combination.length; i++) {
//             minForce = Math.min(minForce, combination[i] - combination[i - 1]);
//         }
//         maxMinForce = Math.max(maxMinForce, minForce);
//     }

//     return maxMinForce;
// };

let position, m;

position = [1, 2, 3, 4, 7], m = 3
position = [5, 4, 3, 2, 1, 1000000000], m = 2

console.log(maxDistance(position, m));
// Example 1:
// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

// Example 2:
// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.