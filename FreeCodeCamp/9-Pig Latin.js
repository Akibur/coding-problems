/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

//input 
function translatePigLatin(str) {
    let regexConsonant = /^[^aeiou]+/gi;
    let regexVowel = /^[aeiou]+/gi;

    if (regexConsonant.test(str)) {
        let arr = str.match(regexConsonant);
        let removedConsonant = str.replace(regexConsonant, '');
        let endStr = arr.join('');
        let finalStr = removedConsonant.concat(endStr, "ay");

        return finalStr;
    }

    if (regexVowel.test(str)) {
        let finalStr = str.concat("way");
        return finalStr;
    }


}

translatePigLatin("ctgalifornia");

//console.log(findNumbers(nums));
