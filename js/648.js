/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {

    dictionary.sort((a, b) => a.length - b.length);

    sentence = sentence.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];

        for (let j = 0; j < dictionary.length; j++) {
            let dictWord = dictionary[j];
            if (word.startsWith(dictWord)) {
                sentence[i] = dictWord;
                break;
            }
        }
    }

    return (sentence.join(' '))

};


let dictionary, sentence;

// dictionary = ["cat", "bat", "rat"], sentence = "the cattle was rattled by the battery"
dictionary = ["a", "b", "c"], sentence = "aadsfasf absbs bbab cadsfafs"
dictionary = ["catt", "cat", "bat", "rat"], sentence = "the cattle was rattled by the battery"

console.log(replaceWords(dictionary, sentence));

// Example 1:
// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

// Example 2:
// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"