// Task 1: Function Declaration


// the lines below are a function that when ran it will calculate the profit and log it in the console using template literals
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    console.log(`Profit made: $${(sellingPrice - costPrice)*unitsSold}`);
};

//  lines 9 and 10 run the calculatedProfit function using test data
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);


// Task 2: Function Expression


// the lines below are a function that calculates the amount of sales tax and logs it to the console using template literals
function calculateSalesTax(amount, taxRate){
    console.log(`The sales tax is: $${Math.round(amount * taxRate)}`);
};

//  lines 23 and 24 run the calculateSalesTax function usin the test data
calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);


// Task 3: Arrow Function


// the lines below are an arrow function that runs an if statement and depending on what your performance rating is you get a different bonus amount
const calculateBonus = (salary, performanceRating) => {
    if (performanceRating === "Excellent") {
        console.log(`Your Bonus is: $${salary * 0.2}`);
    };
    if (performanceRating === "Good") {
        console.log(`Your Bonus is: $${salary * 0.1}`);
    };
    if (performanceRating === "Average") {
        console.log(`Your Bonus is: $${salary * 0.05}`);
    };
};

//  lines 44 and 45 run the function above using the test data
calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");


//  Task 4: Parameters and Arguments


// the lines below are a function that calculates the total cost of the subscription by multiplying months by price and subtracting any discount then logs it in the console
function calculateSubscriptionCost(plan, months, discount = 0) {
    if (plan === "Basic") {
        console.log(`Total Cost: $${(months * 10) - discount}`);
    };
    if (plan === "Premium") {
        console.log(`Total Cost: $${(months * 20) - discount}`);
    };
    if (plan === "Enterprise") {
        console.log(`Total Cost: $${(months * 50) - discount}`);
    };
};

//  lines 65 and 66 run the calculateSubscriptionCost function using the test data
calculateSubscriptionCost("Basic", 6, 10);
calculateSubscriptionCost("Premium", 12, 0);


// Task 5: Returning Values


// the lines below are a function that calculates the converted currency by multiplying the amount by the exchange rate and uses a method to round, then logs it in the console using template literals
function convertCurrency(amount, exchangeRate) {
    console.log(`Converted Amount: $${(amount * exchangeRate).toFixed(2)}`);
};

//  lines 78 and 79 run the convertCurrency function using the test data
convertCurrency(100, 1.1);
convertCurrency(250, 0.85);


//  Task 6: Higher-Order Functions

let orders = [200, 600, 1200, 450, 800]; // declares array

//  the lines below are a function that uses the map method to go through the array and apply the discount function to any number that qualifies
function applyBulkDiscount(order, discountFunction) {
    return order.map(discountFunction);
};

// line 92 is an arrow function that sets the parameters and what to do if a number qualifies
let discount10percent = (order) => order > 500 ? order * 0.9 : order;

// lines 95 and 96 run the function and log it in the console
discountedPurchases = applyBulkDiscount(orders, discount10percent);
console.log(discountedPurchases);


// Task 7: Closures


// the lines below are a function that tracks the total expenses by adding them together, and returns a message with the total
function createExpenseTracker() {
    let total = 0;

    return function (expense){
        return `Total Expense: $${total += expense}`;
    } ;
};

let tracker = createExpenseTracker();  // assigns tracker the output of the function

// line 114 and 115 run the function using testing data
console.log(tracker(200));
console.log(tracker(150));
