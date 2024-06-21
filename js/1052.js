/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let n = customers.length;
    let satisfiedCustomers = 0;
    let additionalSatisfied = 0;

    for (let i = 0; i < n; i++) {
        if (grumpy[i] == 0) {
            satisfiedCustomers += customers[i];
        }
    }

    // For First Window
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            additionalSatisfied += customers[i];
        }
    }

    let maxAddtionalSatisfied = additionalSatisfied;

    for (let i = minutes; i < n; i++) {
        if (grumpy[i] === 1) {
            additionalSatisfied += customers[i];
        }
        if (grumpy[i - minutes] === 1) {
            additionalSatisfied -= customers[i - minutes];
        }
        maxAddtionalSatisfied = Math.max(maxAddtionalSatisfied, additionalSatisfied);
    }

    return satisfiedCustomers + maxAddtionalSatisfied;
};


let customers, grumpy, minutes;

customers = [1, 0, 1, 2, 1, 1, 7, 5], grumpy = [0, 1, 0, 1, 0, 1, 0, 1], minutes = 3;

console.log(maxSatisfied(customers, grumpy, minutes))


// Example 1:
// Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
// Output: 16
// Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
// The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

// Example 2:
// Input: customers = [1], grumpy = [0], minutes = 1
// Output: 1