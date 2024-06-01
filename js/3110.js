/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let sum = 0;
    let length = s.length;
    for (let i = 0; i < length - 1; i++) {
        let currentCharCode = s.charCodeAt(i);
        let nextCharCode = s.charCodeAt(i + 1);
        sum += Math.abs(currentCharCode - nextCharCode);
    }
    return sum;
};

let s;

s = "hello";
s = "zaz";
s = "ab";

console.log(scoreOfString(s));