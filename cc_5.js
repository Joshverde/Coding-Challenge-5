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
