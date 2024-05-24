/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];

    function isPalindrome(s) {
        let left = 0, right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, path) {

        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < s.length; i++) {
            const substr = s.substring(start, i + 1);
            if (isPalindrome(substr)) {
                path.push(substr);
                backtrack(i + 1, path);
                path.pop()
            }
        }
    }

    backtrack(0, []);

    return result;

};