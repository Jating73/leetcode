/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    // Initialize the frequency array with Infinity, representing the minimum frequency of each character
    const minFreq = Array(26).fill(Infinity);

    // Iterate over each word in the words array
    for (let word of words) {
        // Initialize the current frequency array for the current word
        const charCount = Array(26).fill(0);

        // Count the occurrences of each character in the current word
        for (let char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Update the minimum frequency array
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], charCount[i]);
        }
    }

    // Construct the result array based on the minimum frequency array
    const result = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i]-- > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }

    return result;
};
