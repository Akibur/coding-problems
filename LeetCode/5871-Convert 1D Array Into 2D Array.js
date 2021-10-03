//5871. Convert 1D Array Into 2D Array
var construct2DArray = function (original, m, n) {
    if (original.length != m * n) return [];


    let res = new Array(m);
    for (var i = 0; i < res.length; i++) {
        res[i] = new Array(n);
    }
    let curr = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = original[curr];
            curr++;
        }

    }





    //res.push(arr);
    //return [].push(arr);



    return res;
};

let original = [1, 1, 1, 1], m = 1, n = 4;

console.log(construct2DArray(original, m, n));