// Optimized Approach
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let adjList = {};
    for (let i = 0; i < edges.length; i++) {
        let [vertex1, vertex2] = edges[i];
        if (adjList[vertex1]) {
            adjList[vertex1].push(vertex2);
            return vertex1;
        } else {
            adjList[vertex1] = [vertex2];
        }

        if (adjList[vertex2]) {
            adjList[vertex2].push(vertex1);
            return vertex2;
        } else {
            adjList[vertex2] = [vertex1];
        }
    }
};



// Brute Force Approach
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let adjList = {};
    for (let i = 0; i < edges.length; i++) {
        let [vertex1, vertex2] = edges[i];
        if (adjList[vertex1]) {
            adjList[vertex1].push(vertex2);
        } else {
            adjList[vertex1] = [vertex2];
        }

        if (adjList[vertex2]) {
            adjList[vertex2].push(vertex1);
        } else {
            adjList[vertex2] = [vertex1];
        }
    }

    let center = -1;

    for (let [key, value] of Object.entries(adjList)) {
        if (value.length > 1) {
            center = key;
            break;
        }
    }


    return center
};


let edges;

edges = [[1, 2], [2, 3], [4, 2]]

console.log(findCenter(edges))


// Example 1:
// Input: edges = [[1,2],[2,3],[4,2]]
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

// Example 2:
// Input: edges = [[1,2],[5,1],[1,3],[1,4]]
// Output: 1