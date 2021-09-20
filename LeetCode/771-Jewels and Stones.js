var numJewelsInStones = function (jewels, stones) {
    let mapJewels = {};
    let mapStones = {};
    let counter = 0;

    jewels.split('').forEach((el) => {
        mapJewels[el] = mapJewels[el] + 1 || 1;

    });

    stones.split('').forEach((el) => {
        mapStones[el] = mapStones[el] + 1 || 1;

    });

    for (const key of Object.keys(mapStones)) {
        if (mapJewels[key]) counter += mapStones[key];
    }
    return counter;

    console.log(mapJewels);
    console.log(mapStones);
};

let jewels = "aA", stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
