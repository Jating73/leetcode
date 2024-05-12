// Input: nums = [-1,2,-3,3]
// Output: 3

// Input: nums = [-1,10,6,7,-7,1]
// Output: 7

// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1

// Input: nums = [648,674,610]
// Output: -1

var findMaxK = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let right = nums.length - 1;
    let max = nums[right];
    while (true && right >= 0) {
        if (max < 0) {
            break;
        }
        let negativeMax = max * -1;
        if (nums.indexOf(negativeMax) >= 0) {
            return max;
        }
        right--;
        max = nums[right];
    }

    return -1;
};


let nums = [-1, 2, -3, 3]
// nums = [-1, 10, 6, 7, -7, 1]
// nums = [-10,8,6,7,-2,-3]
console.log(findMaxK(nums));