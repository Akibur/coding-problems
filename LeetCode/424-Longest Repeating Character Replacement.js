
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.




var characterReplacement = function (s, k) {

    let winStart = 0;
    let winEnd = 0;
    let replacements = k;
    let res = 0;
    let map = {};

    while (winEnd < s.length) {
        map[s[winEnd]] = map[s[winEnd]] + 1 || 1;

        while ((winEnd - winStart + 1) - Math.max(...Object.values(map)) > k) {
            map[s[winStart]] -= 1;
            winStart += 1;
        }
        res = Math.max(res, (winEnd - winStart) + 1);
        winEnd++;

    };
    // console.log(Math.max(...Object.values(map)));
    // console.log(map);
    return res;

};
let s = "AABAABBA", k = 1;
console.log(characterReplacement(s, k));
