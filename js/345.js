// Input: s = "hello"
// Output: "holle"

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelsInStr = s.split('').filter(s => vowels.indexOf(s) >= 0)

    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) >= 0) {
            newStr += vowelsInStr.pop();
        } else {
            newStr += s[i];
        }
    }
    return newStr;
};


let s;
s = "hello";
s = "leetcode"

console.log(reverseVowels(s))