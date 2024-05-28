/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const memo = new Map();

    function dfs(s) {
        if (memo.has(s)) {
            return memo.get(s);
        }

        const results = [];

        if (wordDict.includes(s)) {
            results.push(s);
        }

        for (let i = 1; i < s.length; i++) {
            const prefix = s.substring(0, i);
            if (wordDict.includes(prefix)) {
                const suffix = s.substring(i);
                const suffixResults = dfs(suffix);
                for (const result of suffixResults) {
                    results.push(prefix + " " + result);
                }
            }
        }

        memo.set(s, results);
        return results;
    }

    return dfs(s);
};

// Example 1:
// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Example 2:
// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []