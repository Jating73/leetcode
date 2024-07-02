// Optimal Approach
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const countMap = new Map();
    const result = [];

    // Count the occurrences of each number in nums1
    for (const num of nums1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Iterate through nums2 and collect intersections
    for (const num of nums2) {
        if (countMap.has(num) && countMap.get(num) > 0) {
            result.push(num);
            countMap.set(num, countMap.get(num) - 1); // Decrease the count
        }
    }

    return result;
};


// Brute Force
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//     let map1 = {}, map2 = {};
//     for (let i = 0; i < nums1.length; i++) {
//         if (map1[nums1[i]]) {
//             map1[nums1[i]]++;
//         } else {
//             map1[nums1[i]] = 1
//         }
//     }
//     for (let i = 0; i < nums2.length; i++) {
//         if (map2[nums2[i]]) {
//             map2[nums2[i]]++;
//         } else {
//             map2[nums2[i]] = 1
//         }
//     }

//     let ans = [];
//     for (let [key, value] of Object.entries(map1)) {
//         if (map2[key]) {
//             let length = Math.min(value, map2[key])
//             ans = [...ans, ...new Array(length).fill(parseInt(key))]
//         }
//     }

//     return ans;
// };

let nums1, nums2;

nums1 = [1, 2, 2, 1], nums2 = [2, 2]
nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]

console.log(intersect(nums1, nums2))

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.