/*
Having a list of objects filter it to get an array of uniq objects.
Constraints:
    - Uniqueness is considered within object's values -> {a: 1, b: 2} is identical with {a:2, b:1};
    - When an object is not uniq, the first occur has to remain
    - Object's structure has to remain
    - Order in the array has to remain
 */


const list = [
    { "n1": 18, "n2": 1, "n3": 5, "n4": 17 },
    { "n1": 1, "n2": 2, "n3": 11, "n4": 6 },
    { "n1": 1, "n2": 5, "n3": 11, "n4": 12 },
    { "n1": 6, "n2": 17, "n3": 12, "n4": 1 },
    { "n1": 4, "n2": 7, "n3": 8, "n4": 20 },
    { "n1": 2, "n2": 3, "n3": 8, "n4": 7 },
    { "n1": 2, "n2": 8, "n3": 7, "n4": 6 },
    { "n1": 14, "n2": 15, "n3": 11, "n4": 10 },
    { "n1": 11, "n2": 8, "n3": 16, "n4": 15 },
    { "n1": 20, "n2": 4, "n3": 8, "n4": 7 },
    { "n1": 11, "n2": 12, "n3": 6, "n4": 14 },
    { "n1": 1, "n2": 5, "n3": 12, "n4": 11 },
    { "n1": 17, "n2": 12, "n3": 5, "n4": 1 },
    { "n1": 8, "n2": 9, "n3": 13, "n4": 19 },
    { "n1": 8, "n2": 9, "n3": 19, "n4": 15 },
    { "n1": 10, "n2": 9, "n3": 15, "n4": 8 },
    { "n1": 11, "n2": 12, "n3": 17, "n4": 6 },
    { "n1": 8, "n2": 7, "n3": 20, "n4": 4 }
];

const transform = obj => Object.values(obj).sort().toString();
const objsWithKeys = list.map(item => ({
    item,
    key: transform(item)
}));
const uniqObjects = objsWithKeys.reduce((acc, {key, item}) =>
        !acc.memo.has(key) ?
            ({
                uniqObjects: [...acc.uniqObjects, item],
                memo: acc.memo.add(key)
            }) :
            acc
, {uniqObjects: [], memo: new Set()}).uniqObjects;
console.log(uniqObjects);
