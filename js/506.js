/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let answers = [];
    let sortedScores = [...score];
    sortedScores.sort((a, b) => b - a)

    let firstThree = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let i = 0; i < score.length; i++) {
        let index = sortedScores.indexOf(score[i]);
        if (index <= 2) {
            answers.push(firstThree[index]);
        } else {
            answers.push((index + 1).toString());
        }
    }
    return answers;
};