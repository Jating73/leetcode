// 726. Number of Atoms

// Given a string formula representing a chemical formula, return the count of each atom.

// The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

// One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.

// For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
// Two formulas are concatenated together to produce another formula.

// For example, "H2O2He3Mg4" is also a formula.
// A formula placed in parentheses, and a count (optionally added) is also a formula.

// For example, "(H2O2)" and "(H2O2)3" are formulas.
// Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

// The test cases are generated so that all the values in the output fit in a 32-bit integer.


/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    let i = 0;

    function parse() {
        const atomCount = {};
        while (i < formula.length && formula[i] !== ')') {
            if (formula[i] === '(') {
                i++;
                const innerCount = parse();
                i++; // skip ')'
                let count = 0;
                while (i < formula.length && isDigit(formula[i])) {
                    count = count * 10 + (formula[i].charCodeAt(0) - '0'.charCodeAt(0));
                    i++;
                }
                count = count || 1;
                for (let atom in innerCount) {
                    atomCount[atom] = (atomCount[atom] || 0) + innerCount[atom] * count;
                }
            } else {
                let atom = parseAtom();
                let count = parseCount();
                atomCount[atom] = (atomCount[atom] || 0) + count;
            }
        }
        return atomCount;
    }

    function parseAtom() {
        let atom = formula[i];
        i++;
        while (i < formula.length && formula[i] >= 'a' && formula[i] <= 'z') {
            atom += formula[i];
            i++;
        }
        return atom;
    }

    function parseCount() {
        let count = 0;
        while (i < formula.length && isDigit(formula[i])) {
            count = count * 10 + (formula[i].charCodeAt(0) - '0'.charCodeAt(0));
            i++;
        }
        return count || 1;
    }

    function isDigit(ch) {
        return ch >= '0' && ch <= '9';
    }

    const result = parse();
    const sortedAtoms = Object.keys(result).sort();
    let output = '';
    for (const atom of sortedAtoms) {
        output += atom;
        if (result[atom] > 1) {
            output += result[atom];
        }
    }

    return output;
};


// Example 1:
// Input: formula = "H2O"
// Output: "H2O"
// Explanation: The count of elements are {'H': 2, 'O': 1}.

// Example 2:
// Input: formula = "Mg(OH)2"
// Output: "H2MgO2"
// Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

// Example 3:
// Input: formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"
// Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.