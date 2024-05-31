/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // nums = nums.join('');
    // nums = nums.split('');
    // nums.sort((a, b) => parseInt(b) - parseInt(a))
    // nums = nums.join('')
    // return nums;


    function f(index) {
        if (index === nums.length - 1) {

        }

        let pick = nums[index]

    }

    return f(0)




};

let nums;

nums = [10, 2] // [2, 10]
nums = [3, 30, 34, 5, 9] // [3, 5, 9, 30, 34]

console.log(largestNumber(nums))

// Example 1:
// Input: nums = [10, 2]
// Output: "210"

// Example 2:
// Input: nums = [3, 30, 34, 5, 9]
// Output: "9534330"