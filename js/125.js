/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    s = s.toLowerCase();
    let str = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        let charCode = s.charCodeAt(i);
        if ((97 <= charCode && charCode <= 122) || (s[i] >= 0 && s[i] <= 9)) {
            str += s[i];
        }
    }

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }

    return true;

};

let s;
s = "A man, a plan, a canal: Panama"
s = "race a car"
s = " "

console.log(isPalindrome(s));


// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.