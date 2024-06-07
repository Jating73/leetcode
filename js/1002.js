/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let ansMap = new Map();

    for (let i = 0; i < words.length; i++) {
        let prevWord = words[i], map = new Map();
        for (let k = 0; k < prevWord.length; k++) {
            if (map.has(prevWord[k])) {
                map.set(prevWord[k], map.get(prevWord[k]) + 1);
            } else {
                map.set(prevWord[k], 1);
            }
        }
        for (let j = i + 1; j < words.length; j++) {
            let currentWord = words[j], map2 = new Map();
            for (let k = 0; k < currentWord.length; k++) {
                if (map2.has(currentWord[k])) {
                    map2.set(currentWord[k], map2.get(currentWord[k]) + 1);
                } else {
                    map2.set(currentWord[k], 1);
                }
            }
            let left = 0;
            let keys = [...map.keys()], keys2 = [...map2.keys()]
            let currentMaxLength = keys2.length;
            if (keys.length < currentMaxLength) {
                currentMaxLength = keys.length
            }
            let currentMap = new Map();
            while (left < currentMaxLength) {
                let key = keys[left]
                if (map2.has(key)) {
                    currentMap.set(key, Math.min(map.get(key), map2.get(key)))
                }
                left++;
            }

            console.log("Before - ", currentMap, ansMap)

            if (i === 0 && j === 1) {
                ansMap = currentMap;
            } else {
                console.log("Else --")
                left = 0;
                keys = [...ansMap.keys()], keys2 = [...currentMap.keys()]
                currentMaxLength = keys2.length;
                if (keys.length > currentMaxLength) {
                    currentMaxLength = keys.length
                }
                while (left < currentMaxLength) {
                    let key = keys[left]
                    if (ansMap.has(key)) {
                        ansMap.set(key, Math.min(ansMap.get(key), currentMap.get(key)))
                    } else {
                        ansMap.delete(key)
                    }
                    left++;
                }

            }

            console.log("After - ", currentMap, ansMap)
            console.log("\n")
        }
    }

    let ans = []
    for (let [key, value] of ansMap.entries()) {
        for (let i = 0; i < value; i++) {
            ans.push(key)
        }
    }
    return ans;
};

let words;
// words = ["bella", "label", "roller"]
words = ["acabcddd", "bcbdbcbd", "baddbadb", "cbdddcac", "aacbcccd", "ccccddda", "cababaab", "addcaccd"]

console.log(commonChars(words))

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]