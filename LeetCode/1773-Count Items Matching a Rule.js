var countMatches = function (items, ruleKey, ruleValue) {

    const rules = {
        type: 0,
        color: 1,
        name: 2
    };

    let counter = 0;

    let Ruleindex = rules[ruleKey];



    items.forEach(el => {

        el[Ruleindex] == ruleValue ? counter++ : null;
    });

    return counter;

};

console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver"));