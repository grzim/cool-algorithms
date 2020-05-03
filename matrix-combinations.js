/*
    Problem: Having an array with arrays, return an array having all possible combinations within internal arrays
    [[1,2],[3]] ->[[1],[2],[1,2],[3]]
    [[1,2,3],[5,8] -> [[1],[1,2],[1,2,3],[2,3],[3,1],[5],[8],[5,8]]
 */

const addToEach = (element, arr) => [...arr, element];

const getAllPossibilitiesForSingleArr = (arr) =>
    arr.reduce((acc, curr,i) => {
        const combinationsSoFarWithNewElementAdded = acc.map(ar => addToEach(arr[i],ar));
        return [...acc, [arr[i]], ...combinationsSoFarWithNewElementAdded]
    },[]);

const getAllPossibilitiesForArrays = arrays => arrays.map(getAllPossibilitiesForSingleArr);
