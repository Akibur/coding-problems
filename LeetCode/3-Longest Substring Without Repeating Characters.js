/*
Given a string s, find the length of the longest substring without repeating characters.


*/
//input 
let s = "asdfqwerfffaaa";


var lengthOfLongestSubstring = function (s) {
    if (s.length < 1) return 0;
    let winStart = 0;
    let winEnd = 0;

    let max = 0;
    let map = {};


    while (winEnd < s.length) {
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


//Loop thought the array untill winEnd reaches end on string
//If char not in map
//place it in the map 
//winEnd++
// max = max || winEnd-WinStart+1
//If char in map 
//remove char from map
//winSart++

console.log(lengthOfLongestSubstring(s));
