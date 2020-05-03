/*
   Algorithm yo find the Longest Substring Without Repeating Characters
 */

const lengthOfLongestSubstring = str => {
    let length = str.length;
    if(length < 2) return length;
    let map = new Map();
    let max = -Infinity;
    let from = 0;
    for(let i=0; i<length; i++) {
        let j = map.get(str[i]);
        if(j !== undefined) {
            from = Math.max(j + 1, from);
        }
        map.set(str[i], i);
        max = Math.max(max, i - from + 1)
    }
    return max;
};
