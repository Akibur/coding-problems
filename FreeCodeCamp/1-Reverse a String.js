/*
Reverse a given string

My Notes: 
 */
//input 
let str = "Hello World";

var reverseString = function (str) {
    let arr = str.split('');
    return arr.reverse().join('');

};


console.log(reverseString(str));