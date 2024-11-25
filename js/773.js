/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {

    const target = "123450"; // Target state when solved
    const directions = [
        [1, 3], // For index 0, 0 can swap with 1 and 3
        [0, 2, 4], // For index 1, 1 can swap with 0, 2, and 4
        [1, 5], // For index 2, 2 can swap with 1 and 5
        [0, 4], // For index 3, 3 can swap with 0 and 4
        [1, 3, 5], // For index 4, 4 can swap with 1, 3, and 5
        [2, 4], // For index 5, 5 can swap with 2 and 4
    ];

    // Convert the board to a string for easier comparison and processing
    const start = board.flat().join("");

    // If the initial state is already the target, return 0 moves
    if (start === target) return 0;

    const queue = [[start, start.indexOf("0"), 0]]; // [current state, index of 0, move count]
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const [current, zeroIndex, moves] = queue.shift();

        for (const dir of directions[zeroIndex]) {
            const next = current.split("");
            // Swap 0 with the adjacent tile
            [next[zeroIndex], next[dir]] = [next[dir], next[zeroIndex]];
            const nextState = next.join("");

            if (nextState === target) return moves + 1; // Found the solution

            if (!visited.has(nextState)) {
                visited.add(nextState);
                queue.push([nextState, dir, moves + 1]);
            }
        }
    }

    return -1; // Return -1 if no solution is foundconst target = "123450"; // Target state when solved

};
