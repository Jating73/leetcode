/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    let map = new Map();
    nums.forEach((num) => {
        let val = convertToMapVal(num)
        map.set(num, val)
    })

    nums.sort((a, b) => {
        let x = map.get(a);
        let y = map.get(b);

        if (x != y) {
            return x - y;
        }

        return 1;
    })

    return nums

    function convertToMapVal(num) {
        let sum = 0;
        num = num.toString();
        console.log(num)
        let length = num.length;
        length -= 1;

        for (let char of num) {
            sum += mapping[parseInt(char, 10)] * Math.pow(10, length--)
        }
        return sum;
    }
};

let mapping, nums;

mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6], nums = [991, 338, 38]
mapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], nums = [789, 456, 123]

console.log(sortJumbled(mapping, nums))