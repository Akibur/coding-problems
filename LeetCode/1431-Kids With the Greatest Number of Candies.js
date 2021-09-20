var kidsWithCandies = function (candies, extraCandies) {
    const res = [];

    candies.forEach(kid => {
        if (kid + extraCandies >= Math.max(...candies)) res.push(true);
        else res.push(false);
    });

    return res;
};

let candies = [2, 3, 5, 1, 3], extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));