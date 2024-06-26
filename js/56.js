/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let newIntervals = [intervals[0]];
    for (let right = 1; right < intervals.length; right++) {
        let currentInterval = intervals[right];
        let prevInterval = newIntervals[newIntervals.length - 1];
        if (prevInterval[1] >= currentInterval[0]) {
            prevInterval[1] = Math.max(prevInterval[1], currentInterval[1]);
        } else {
            newIntervals.push(currentInterval);
        }
    }

    return newIntervals;
};


// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.