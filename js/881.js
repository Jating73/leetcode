// Input: people = [1,2], limit = 3
// Output: 1

// Input: people = [3,2,2,1], limit = 3
// Output: 3

// Input: people = [3,5,3,4], limit = 5
// Output: 4

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people = people.sort((a, b) => a - b);
    let count = 0;
    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        if (left != right && people[left] + people[right] <= limit) {
            count++;
            left++;
            right--;
        } else {
            count++;
            right--;
        }
    }

    return count;
};