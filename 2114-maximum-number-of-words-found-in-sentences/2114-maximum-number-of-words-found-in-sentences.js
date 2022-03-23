/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxCount = 0;
    let wordCount = 0;

    
    sentences.forEach((sentence) => {
        sentence.split(" ").forEach((word) => {
            wordCount ++;
        })
        
        if(wordCount > maxCount) maxCount = wordCount;
        wordCount = 0;
    })
    
    return maxCount;
};