var maximumWealth = function (accounts) {
    return Math.max(...accounts.map(customer => {
        return customer.reduce((a, b) => a + b);
    }));

};

console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));