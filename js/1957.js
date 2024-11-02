/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {

    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) stack.push(s[i]);
        else {
            if (stack.length >= 2 && s[i] === stack[stack.length - 1] && s[i] === stack[stack.length - 2]) {
                continue;
            } else {
                stack.push(s[i])
            }
        }
    }

    return stack.join('')

};

let s;

s = "leeetcode"
s = "aaabaaaa"
s = "aab"

console.log(makeFancyString(s))