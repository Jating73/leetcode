// 1105. Filling Bookcase Shelves

// You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book. You are also given an integer shelfWidth.

// We want to place these books in order onto bookcase shelves that have a total width shelfWidth.

// We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.

// Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.

// For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.
// Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

 

// Example 1:
// Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
// Output: 6
// Explanation:
// The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
// Notice that book number 2 does not have to be on the first shelf.

// Example 2:
// Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
// Output: 4

/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    let n = books.length;
    let memo = new Map();

    const dfs = (i) => {
        if (i == n) return 0;

        if (memo.has(i)) return memo.get(i);

        let width = 0;
        let height = 0;
        let minHeight = Infinity;

        for (let j = i; j < n; j++) {
            width += books[j][0];
            if (width > shelfWidth) break;

            height = Math.max(height, books[j][1]);
            minHeight = Math.min(minHeight, height + dfs(j + 1));
        }

        memo.set(i, minHeight);
        return minHeight;
    }

    return dfs(0);
};