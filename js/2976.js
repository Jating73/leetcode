/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {

    let n = source.length;
    let m = target.length

    let adjList = new Map();

    for (let i = 0; i < original.length; i++) {
        if (!adjList.has(original[i])) adjList.set(original[i], []);
        adjList.get(original[i]).push({ char: changed[i], cost: cost[i] })
    }

    function minTransformCost(s, t) {
        if (s === t) return 0;

        const queue = [{ char: s, cost: 0 }];
        const visited = new Map()

        while (queue.length) {
            const { char: u, cost: curCost } = queue.shift();

            if (u == t) return curCost;
            if (visited.has(u) && curCost >= visited.get(u)) continue;

            visited.set(u, curCost);

            if (adjList.has(u)) {
                for (const { char: v, cost: edgeCost } of adjList.get(u)) {
                    const newCost = curCost + edgeCost;
                    if (!visited.has(v) || newCost < visited.get(v)) {
                        queue.push({ char: v, cost: newCost });
                    }
                }
            }
        }

        return Infinity;

    }


    let totalCost = 0;

    for (let i = 0; i < n; i++) {
        if (source[i] != target[i]) {
            const cost = minTransformCost(source[i], target[i]);
            if (cost === Infinity) return -1;
            totalCost += cost
        }
    }

    return totalCost;
};

// Usage example:
let source, target, original, changed, cost;

source = "abcd", target = "acbe", original = ["a", "b", "c", "c", "e", "d"], changed = ["b", "c", "b", "e", "b", "e"], cost = [2, 5, 5, 1, 2, 20]

console.log(minimumCost(source, target, original, changed, cost))