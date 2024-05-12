// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {

    function gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    const lenGCD = gcd(str1.length, str2.length);

    const gcdString = str1.slice(0, lenGCD);

    return gcdString;

};


let str1, str2;
str1 = "ABCABC", str2 = "ABC"
str1 = "ABABAB", str2 = "ABAB"
str1 = "LEET", str2 = "CODE"
str1 = "ABCDEF", str2 = "ABC"

console.log(gcdOfStrings(str1, str2))