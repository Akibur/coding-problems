/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


My Notes: 
The key to avoiding nested for loops is using dictionaries
*/
//input 
function confirmEnding(str, target) {

    let arrStr = str.split('');
    let arrTarget = target.split('');
    return str.substring(arrStr.length - arrTarget.length, arrStr.length) == target;
}

confirmEnding("Bastian", "n");