// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.
let fruits = [1, 1]
    ;

var totalFruit = function (fruits) {
    let map = {};
    let winStart = 0;
    let maxResult = Number.NEGATIVE_INFINITY;

    //Loop through the array

    for (let winEnd = 0; winEnd < fruits.length; winEnd++) {
        if (fruits.length == 1) return 1;
        map[fruits[winEnd]] = map[fruits[winEnd]] + 1 || 1;

        if (Object.keys(map).length <= 2) {
            maxResult = Math.max(Object.values(map).reduce((a, b) => a + b), maxResult);
        }

        while (Object.keys(map).length > 2) {
            map[fruits[winStart]] = map[fruits[winStart]] - 1;
            if (map[fruits[winStart]] == 0) delete map[fruits[winStart]];
            winStart++;

        }



    }


    return maxResult;

};

console.log(totalFruit(fruits));
