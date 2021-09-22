var finalValueAfterOperations = function (operations) {
    let counter = 0;
    operations.forEach((opr) => {
        if (opr == "++X" || opr == "X++") counter++;
        else counter--;

    });

    return counter;

};