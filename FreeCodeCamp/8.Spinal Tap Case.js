/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

My Notes: 
The key to avoiding nested for loops is using dictionaries
*/
//input 
function spinalCase(str) {
    return str.split(/\W|_|(?=[A-Z])/).join('-').toLowerCase();
}


console.log(spinalCase('The_Andy_Griffith_Show'));

