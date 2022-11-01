# boosted-sorter

### Getting Started

Install with NPM:

```bash
$ npm install boosted-sorter --save
```

### Usage

```js
import boostedSorter from "boosted-sorter";

const users = [
    {
        email: "admin@company.com",
        password: "admin",
        username: "admin",
    },
    {
        email: "leslie.vasquez65@company.com",
        password: "funfun",
        username: "bluepanda840",
    },
    {
        email: "john.doe@company.com",
        password: "jdoe",
        username: "jdoe",
    },
    {
        email: "yolanda.bishop25@company.com",
        password: "personal",
        username: "purplewolf498",
    },
    {
        email: "allen.hansen47@company.com",
        password: "jenny1",
        username: "whitecat698",
    },
];

boostedSorter({
    data: users,
    properties: ["username"],
    type: "string",
    orderBy: "asc",
});

/*
[
    {
        email: "admin@company.com",
        password: "admin",
        username: "admin",
    },
    {
        email: "leslie.vasquez65@company.com",
        password: "funfun",
        username: "bluepanda840",
    },
    {
        email: "john.doe@company.com",
        password: "jdoe",
        username: "jdoe",
    },
    {
        email: "yolanda.bishop25@company.com",
        password: "personal",
        username: "purplewolf498",
    },
    {
        email: "allen.hansen47@company.com",
        password: "jenny1",
        username: "whitecat698",
    },
];
*/
```

### Options

```js
boostedSorter({
    data: [], // The array of objects to sort
    properties: [], // Object properties to sort
    type: "stringWithNumber", // enum('stringWithNumber'|'string'|'number'|'dateTime'), by default 'stringWithNumber'
    orderBy: "asc", // enum('asc'|'desc'), by default 'asc'
});
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
