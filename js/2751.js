/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {

    let n = positions.length;

    let robots = [];

    for (let i = 0; i < n; i++) {
        robots.push({ position: positions[i], health: healths[i], direction: directions[i], index: i });
    }

    robots.sort((a, b) => a.position - b.position);

    let stack = [];

    for (let robot of robots) {
        if (robot.direction === 'R') {
            stack.push(robot);
        } else {
            while (stack.length > 0 && stack[stack.length - 1].direction === 'R') {
                let top = stack[stack.length - 1];

                if (top.health > robot.health) {
                    robot.health = 0;
                    top.health -= 1;
                    break;
                } else if (top.health < robot.health) {
                    stack.pop();
                    robot.health -= 1;
                } else {
                    stack.pop();
                    robot.health = 0;
                    break;
                }
            }

            if (robot.health > 0) {
                stack.push(robot);
            }
        }
    }

    let result = new Array(n).fill(0);

    for (let robot of stack) {
        result[robot.index] = robot.health;
    }

    return result.filter((health) => health > 0)

};

let positions, healths, directions;

positions = [5, 4, 3, 2, 1], healths = [2, 17, 9, 15, 10], directions = "RRRRR";
positions = [3, 5, 2, 6], healths = [10, 10, 15, 12], directions = "RLRL"

console.log(survivedRobotsHealths(positions, healths, directions));


// Example 1:
// Input: positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR"
// Output: [2,17,9,15,10]
// Explanation: No collision occurs in this example, since all robots are moving in the same direction. So, the health of the robots in order from the first robot is returned, [2, 17, 9, 15, 10].

// Example 2:
// Input: positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"
// Output: [14]
// Explanation: There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, and since both have the same health, they will be removed from the line. Next, robot 3 and robot 4 will collide and since robot 4's health is smaller, it gets removed, and robot 3's health becomes 15 - 1 = 14. Only robot 3 remains, so we return [14].

// Example 3:
// Input: positions = [1,2,5,6], healths = [10,10,11,11], directions = "RLRL"
// Output: []
// Explanation: Robot 1 and robot 2 will collide and since both have the same health, they are both removed. Robot 3 and 4 will collide and since both have the same health, they are both removed. So, we return an empty array, [].