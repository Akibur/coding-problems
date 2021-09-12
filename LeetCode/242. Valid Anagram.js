var isAnagram = function (s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    for (let char of t) {
        if (!counts[char]) return false;
        counts[char]--;
    }
    return true;
};