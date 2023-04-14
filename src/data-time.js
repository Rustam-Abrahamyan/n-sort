import { isObject } from "./utils";

/**
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} property
 * @returns {Boolean}
 */
const DateTimeSorter = ({ a, b, direction, property, clb }) => {
    if (typeof clb === "function" && clb(a, b)) return clb(a, b);

    const a_state = isObject(a) ? a[property] : a;
    const b_state = isObject(b) ? b[property] : b;

    if (!a_state) return -1;
    if (!b_state) return +1;

    return direction
        ? new Date(b_state) - new Date(a_state)
        : new Date(a_state) - new Date(b_state);
};

export default DateTimeSorter;
