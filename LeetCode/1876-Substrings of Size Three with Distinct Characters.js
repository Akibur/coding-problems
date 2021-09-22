var countGoodSubstrings = function (s) {
    //Create a map to store unique chars
    const map = {};
    let counter = 0;
    let start = 0;
    //loop through the chars
    for (let i = 0; i < s.length; i++) {
        //if char not in map add it
        let char = s[i];
        map[char] = map[char] + 1 || 1;
        //if i greater than 2 
        if (i > 2) {
            //decreaase window size from the start by 1
            char = s[start];
            map[char] > 1 ? map[char] = map[char] - 1 : delete map[char];
            start++;
            //remove char from map
        }
        console.log(Object.keys(map));
        //if map length > 3 
        if (Object.keys(map).length > 2) {
            counter++;
        }
        //counter++
    }

    return counter;

};

console.log(countGoodSubstrings("aababcabc"));