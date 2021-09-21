var sortSentence = function (s) {
    let map = {};
    let res = [];

    s.split(' ').forEach(word => {
        let num = word[word.length - 1];
        word = word.substring(0, word.length - 1);
        map[num] = word;
    });


    for (const key in map) {
        res.push(map[key]);
    }


    return res.join(' ');

    // //Shorter Version
    // s.split(' ')
    //    .sort((a,b) => a[a.length-1] - b[b.length-1])
    //    .map((word) => word.slice(0, word.length-1))
    //    .join(' ');

};

console.log(sortSentence("is2 sentence4 This1 a3"));