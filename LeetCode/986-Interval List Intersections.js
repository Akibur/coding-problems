// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

var intervalIntersection = function (firstList, secondList) {
    if (!firstList || !secondList) return [];

    let Ai = 0, Bi = 0;
    let res = [];

    while (Ai < firstList.length && Bi < secondList.length) {
        let maxStart = Math.max(firstList[Ai][0], secondList[Bi][0]);
        let minEnd = Math.min(firstList[Ai][1], secondList[Bi][1]);

        if (maxStart <= minEnd) res.push([maxStart, minEnd]); // overlap found

        if (firstList[Ai][1] < secondList[Bi][1]) Ai++;
        else Bi++;
    }


    return res;
};

let firstList = [[0, 2], [5, 10], [13, 23], [24, 25]], secondList = [[1, 5], [8, 12], [15, 24], [25, 26]];

console.log(intervalIntersection(firstList, secondList));