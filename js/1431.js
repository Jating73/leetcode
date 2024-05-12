// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    candies = candies.map(candy => {
        let newCandy = candy + extraCandies;
        if (newCandy >= Math.max(...candies)) {
            return true;
        }
        return false;
    });
    return candies;
};


let candies, extraCandies;
// candies = [2,3,5,1,3], extraCandies = 3
// candies = [4,2,1,1,2], extraCandies = 1
candies = [12, 1, 12], extraCandies = 10

console.log(kidsWithCandies(candies, extraCandies))