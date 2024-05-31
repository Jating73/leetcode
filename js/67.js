/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let maxLength = 0;
    if (a.length != b.length) {
        maxLength = Math.max(a.length, b.length)
    }

    let numberOfZeros = maxLength - Math.min(a.length, b.length);

};