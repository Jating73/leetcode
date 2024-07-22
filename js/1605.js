/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    const numRows = rowSum.length;
    const numCols = colSum.length;
    const matrix = Array.from({ length: numRows }, () => Array(numCols).fill(0));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const value = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = value;
            rowSum[i] -= value;
            colSum[j] -= value;
        }
    }

    return matrix;
};