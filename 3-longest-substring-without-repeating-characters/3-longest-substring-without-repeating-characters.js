/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     if (s.length < 1) return 0;
    let winStart = 0;
    let winEnd = 0;

    let max = 0;
    let map = {};


    while (winEnd < s.length) {
        // or if (!map[s[end]]) {
        if (!(s[winEnd] in map)) {
            map[s[winEnd]] = 1;
            max = Math.max(max, winEnd - winStart + 1);
            winEnd++;
        } else {
            delete map[s[winStart]];
            winStart++;
            max = Math.max(max, winEnd - winStart + 1);
        }

    }

    return max; 
};