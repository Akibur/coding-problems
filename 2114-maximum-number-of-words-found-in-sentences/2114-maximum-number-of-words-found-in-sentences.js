/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
      let max = 0; 
    for(s of sentences){
        if(s.split(" ").length > max) 
            max = s.split(" ").length;   
    }
    return max;
};