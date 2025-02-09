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