/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    if (digits[digits.length - 1] < 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
        return digits;
    }

    let newNumber = [], carry = 0, length = digits.length - 1;

    while (true) {
        let digit = (length >= 0) ? digits[length] : 0;
        let sum = (length === digits.length - 1) ? (digit + 1 + carry) : digit + carry;
        let reminder = sum % 10;
        carry = Math.floor(sum / 10);
        newNumber.push(reminder);
        length--;
        if (carry === 0) break;
    }

    while (length >= 0) {
        newNumber.push(digits[length])
        length--;
    }

    return newNumber.reverse();
};


// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].