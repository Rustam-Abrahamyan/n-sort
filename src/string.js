import { isObject } from "./utils";

/**
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} property
 * @returns {Boolean}
 */
const StringSorter = ({ a, b, direction, property }) => {
    const a_state = isObject(a) ? a[property] : a;
    const b_state = isObject(b) ? b[property] : b;

    if (!a_state) return -1;
    if (!b_state) return +1;

    return direction
        ? a_state.localeCompare(b_state)
        : b_state.localeCompare(a_state);
};

export default StringSorter;
