var countConsistentStrings = function (allowed, words) {
    let count = 0;

    words.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!allowed.includes(char)) break;
            else if (i === word.length - 1) count++;
        }
    });

    return count;
};