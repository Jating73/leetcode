// 2337. Move Pieces to Obtain a String

// You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:

// The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
// The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
// Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.

// Example 1:
// Input: start = "_L__R__R_", target = "L______RR"
// Output: true
// Explanation: We can obtain the string target from start by doing the following moves:
// - Move the first piece one step to the left, start becomes equal to "L___R__R_".
// - Move the last piece one step to the right, start becomes equal to "L___R___R".
// - Move the second piece three steps to the right, start becomes equal to "L______RR".
// Since it is possible to get the string target from start, we return true.

// Example 2:
// Input: start = "R_L_", target = "__LR"
// Output: false
// Explanation: The 'R' piece in the string start can move one step to the right to obtain "_RL_".
// After that, no pieces can move anymore, so it is impossible to obtain the string target from start.

// Example 3:
// Input: start = "_R", target = "R_"
// Output: false
// Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.

// Constraints:

// n == start.length == target.length
// 1 <= n <= 105
// start and target consist of the characters 'L', 'R', and '_'.

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  // Remove underscores to check if the sequences of 'L' and 'R' match
  const startPieces = start.replace(/_/g, "");
  const targetPieces = target.replace(/_/g, "");

  // If sequences don't match, transformation is impossible
  if (startPieces !== targetPieces) return false;

  let startIndex = 0;
  let targetIndex = 0;

  // Traverse both strings
  while (startIndex < start.length && targetIndex < target.length) {
    // Skip underscores in both strings
    while (startIndex < start.length && start[startIndex] === "_") startIndex++;
    while (targetIndex < target.length && target[targetIndex] === "_")
      targetIndex++;

    // If both indices reach the end, we're done
    if (startIndex === start.length && targetIndex === target.length)
      return true;

    // If one index reaches the end but the other doesn't, it's invalid
    if (startIndex === start.length || targetIndex === target.length)
      return false;

    // Check movement rules for 'L' and 'R'
    if (start[startIndex] !== target[targetIndex]) return false;

    if (start[startIndex] === "L" && startIndex < targetIndex) return false; // 'L' can't move right
    if (start[startIndex] === "R" && startIndex > targetIndex) return false; // 'R' can't move left

    // Move to the next character
    startIndex++;
    targetIndex++;
  }

  return true;
};