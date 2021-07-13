// Given two strings s1 and s2, return true if s2 contains the permutation of s1.

// In other words, one of s1's permutations is the substring of s2.

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    let mapS1 = new Array(26).fill(0);
    let mapS2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        // ascii code of 'a' is 97
        let idx1 = s1[i].charCodeAt() - 97;
        let idx2 = s2[i].charCodeAt() - 97;

        mapS1[idx1]++;
        mapS2[idx2]++;
    }

    let winStart = 0;
    let winEnd = s1.length - 1;

    while (winEnd < s2.length) {
        if (mapS1.join('') === mapS2.join('')) return true;
        winEnd++;
        if (winEnd === s2.length) break;

        let idx1 = s2[winEnd].charCodeAt() - 97;
        let idx2 = s2[winStart].charCodeAt() - 97;

        mapS2[idx1]++;
        mapS2[idx2]--;

        winStart++;

    }

    return false;
};


let s1 = "asas", s2 = "eidaassboaoaooa";
console.log(checkInclusion(s1, s2));
