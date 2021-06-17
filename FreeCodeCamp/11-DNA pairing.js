
/*

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/


function pairElement(str) {

    let arr = str.split('');
    let finalArr = [];

    arr.map((el) => {
        if (el == 'A') {
            finalArr.push(['A', 'T']);
        }
        if (el == 'T') {
            finalArr.push(['T', 'A']);
        }
        if (el == 'C') {
            finalArr.push(['C', 'G']);
        }
        if (el == 'G') {
            finalArr.push(['G', 'C']);
        }
    });
    return finalArr;
}

console.log(pairElement("GCG"));