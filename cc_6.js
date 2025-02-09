// Task 1: Function Declaration


// the lines below are a function that when ran it will calculate the profit and log it in the console using template literals
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    console.log(`Profit made: $${(sellingPrice - costPrice)*unitsSold}`);
};

//  lines 9 and 10 run the calculatedProfit function using test data
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);