//Task 1 - Customer Profile
//Creates an object with 3 properties
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
//prints to console customer info formated for calrity 
console.log(`**Task 1**\nCustomer Name: ${customer.name}\nCustomer Age: ${customer.age}\nCustomer Email: ${customer.email}\n`);


//Task 2 - Order Details
// declares and object with 3 properties
let order ={
    orderId: 12345,
    totalAmount: 150,
    status: "processing",
    //creates a method within the object that prints to the console log
    displayOrder: function(){
       console.log(`**Task 2**\nOrder ID: ${this.orderId}\nTotal Amount: $${this.totalAmount}\nStatus: ${this.status}\n`) 
    }
};
order.displayOrder(); //calls the method 


//Task 3 - Shopping Cart
// declares an array with three products
let cartItems = ["Switch","Xbox","PS4"];
cartItems.push("Legos");   // adds a fourth product
cartItems.pop("legos");   // removes the fourth product
cartItems.unshift("Candle");  // adds an item to the beginning of the array
cartItems.shift();   // removes the first item of the array
console.log(`**Task 3**\nItems in cart: ${cartItems}\n`);  // logs the final version of the array


//Task 4 - Price Adjustments
// declares an array
let prices = [100,200,300];
let disPrice = prices.map(price => price *.90); // discounts prices in array by 10% using .map() method
console.log(`**Task 4**\nPrices: ${disPrice}\n`); //prints to console log


//Task 5 - Product Availability
//declares and array
let inventory = [5,0,12,8,0];
let filtered = inventory.filter(inventory => inventory > 0 ); // only logs values greater than 0 using .filter() method
console.log(`**Task 5**\nProduct Quantities: ${filtered}\n`);


//Task 6 - Revenue Calculation
// declares an array
let sales = [500,300,200,400]; //Creates an array
let totalSales = sales.reduce((sum,sales)=>sum + sales,0); //. applies the reduce method to sum total sales
console.log(`**Task 6**\nTotal Sales: ${totalSales}\n`); //prints to console log


//Task 7 - Customer Search  
let customers = ["Alice", "Bob", "Charlie", "David"]; //Creates an array
let cstfind = customers.find(x => x === "Charlie");//  uses find to filter through amd check if x === charlie
console.log(`**Task 7**\nFind customer: ${cstfind}\n`); //prints to console log


//Task 8 - Tax Calculation
function calculateTax(amount,taxRate) {
    // returns tax for given amount/tax rate
    return amount * taxRate
};
console.log(`**Task 8**\nTax for inputed amount: $${calculateTax(100,.1)}\n`);// prints to console log


//Task 9 - Discount Application
function applyDiscount(price,discount){
    // returns the price after dicount is applied 
    return price - discount
};
console.log(`**Task 9**\nDiscounted Price: $${applyDiscount(100,30)}\n`); // prints to console log 
