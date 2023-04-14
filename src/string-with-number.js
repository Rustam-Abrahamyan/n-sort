import { isObject } from "./utils";

// Regular expression to separate the digit string from the non-digit strings
const regParts = /\d+|\D+/g;
// Regular expression to test if the string has a digit
const regDigit = /\d/;

/**
 * This function takes to strings and compares them
 *
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} property
 * @returns {Boolean}
 */
const StringWithNumberSorter = ({ a, b, direction, property, clb }) => {
    if (typeof clb === "function" && clb(a, b)) return clb(a, b);
    
    a = (isObject(a) ? a[property] : a).toUpperCase();
    b = (isObject(b) ? b[property] : b).toUpperCase();

    const aParts = a.match(regParts);
    const bParts = b.match(regParts);

    let isDigitPart;

    if (
        aParts &&
        bParts &&
        (isDigitPart = regDigit.test(aParts[0])) == regDigit.test(bParts[0])
    ) {
        const len = Math.min(aParts.length, bParts.length);

        for (let i = 0; i < len; i++) {
            let aPart = aParts[i];
            let bPart = bParts[i];

            if (isDigitPart) {
                aPart = parseInt(aPart, 10);
                bPart = parseInt(bPart, 10);
            }

            if (aPart != bPart) {
                return (direction ? 1 : -1) * (aPart < bPart ? -1 : 1);
            }

            isDigitPart = !isDigitPart;
        }
    }

    return direction ? (a >= b) - (a <= b) : (a <= b) - (a >= b);
};

export default StringWithNumberSorter;
