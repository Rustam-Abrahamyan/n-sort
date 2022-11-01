import { isObject } from "./utils";

/**
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} property
 * @returns {Boolean}
 */
const NumberSorter = ({ a, b, property, direction }) => {
    a = isObject(a) ? a[property] : a;
    b = isObject(b) ? b[property] : b;

    if (a === b) return 0;
    if (a < b) return -direction;
    if (a == null) return 1;
    if (b == null) return -1;

    return direction;
};

export default NumberSorter;