// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.




var merge = function (intervals) {
    let res = [];

    // first sort the input 
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    // push first interval in the output
    let current_interval = intervals[0];
    res.push(current_interval);

    // Loop through the intervals 
    for (interval of intervals) {
        let current_beginning = current_interval[0];
        let current_end = current_interval[1];
        let next_beginning = interval[0];
        let next_end = interval[1];
        if (current_end >= next_beginning) {
            current_interval[1] = Math.max(current_end, next_end);
        } else {
            current_interval = interval;
            res.push(current_interval);
        }
    }

    return res;
    //     If second element of the first interval < the first element of the second interval
    //         push max of the two second intervals in the second 
    //     else
    //         push the interval in the result
    // return result
};

let intervals = [[2, 6], [1, 3], [8, 10], [15, 18]];

console.log(merge(intervals));