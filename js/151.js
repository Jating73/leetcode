// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim();
    let reverseStr = "";
    s = s.split(" ");
    for (let i = s.length - 1; i >= 0; i--) {
        s[i] = s[i].trim();

        if (s[i] === "") continue;

        reverseStr += s[i];
        if (i > 0) {
            reverseStr += " ";
        }
    }
    return `${reverseStr}`;
};

let s;
s = "the sky is blue";
// s = "  hello world  "
s = "a good   example"
console.log(reverseWords(s));
