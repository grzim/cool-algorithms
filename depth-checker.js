/*
   Algorithm to find the maximum depth of an object
 */

const getBranchDepth = (value, depth = 0) =>
    (typeof value === 'object' && value !== null) ? getMaxDepth(value, ++depth) : depth;


const getMaxDepth = (obj, depth = 0) =>
    Object.values(obj).reduce((acc, curr) => {
        const totalDepth = getBranchDepth(curr, depth);
        return (totalDepth > acc) ? totalDepth : acc
    },0);

/*
console.log(getMaxDepth({
    a: {b: {c: 5}},
    b: {a:1,c: {a:3, b: {e:1}}}
})) ---> 3
*/
