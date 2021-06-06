/*
Return the length of the longest word in the provided sentence.


My Notes: 
 */
//input 
function findLongestWordLength(str) {

    let arr = str.split(' ');
    let largest = 0;
    arr.forEach(e => {
        if (e.length > largest) largest = e.length;
    });

    return largest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");