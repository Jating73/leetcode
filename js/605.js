// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let allFlowersPlaced = false;

    for (let i = 0; i < flowerbed.length; i++) {

        // Condition to check if all flowers already placed then break no need to run more loop
        if (n <= 0) {
            allFlowersPlaced = true;
            break;
        }
        // Condition to skip if already a flower at this position
        if (flowerbed[i] === 1) {
            continue;
        }
        if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            flowerbed[i] = 1;
            n--;
        }
    }

    if (n === 0) {
        allFlowersPlaced = true;
    }

    return allFlowersPlaced;
};


let flowerbed, n;
flowerbed = [1, 0, 0, 0, 1], n = 1
flowerbed = [1, 0, 0, 0, 1], n = 2

console.log(canPlaceFlowers(flowerbed, n))