import StringWithNumberSorter from "./src/string-with-number";
import StringSorter from "./src/string";
import NumberSorter from "./src/number";
import DateTimeSorter from "./src/data-time";

/**
 * @param {Array|Object[]} data
 * @param {Object} properties
 * @param {('stringWithNumber'|'string'|'number'|'dateTime')} type
 * @param {String} orderBy
 * @param {Function} clb
 * @returns {Array|Object[]}
 */
const BoostedSorter = ({
    data = [],
    type = "stringWithNumber",
    orderBy = "asc",
    properties = [],
    clb = () => undefined,
}) => {
    const direction = orderBy === "asc";

    return data.sort((a, b) => {
        for (const property of properties) {
            if (a[property] != b[property]) {
                if (type === "stringWithNumber")
                    return StringWithNumberSorter({
                        a,
                        b,
                        property,
                        direction,
                        clb,
                    });
                if (type === "string")
                    return StringSorter({ a, b, property, direction, clb });
                if (type === "number")
                    return NumberSorter({ a, b, property, direction, clb });
                if (type === "dateTime")
                    return DateTimeSorter({ a, b, property, direction, clb });
            }
        }
    });
};

export default BoostedSorter;
