//Create an Inventory Array of Product Objects
let inventory = [
    {name: "Laptop", price: 1400, quanitiy: 12, lowStockLevel:4},
    {name: "Keyboard", price: 900, quanitiy: 10, lowStockLevel:1}, // These are random items
    {name: "Mouse", price: 1100, quanitiy: 8, lowStockLevel:3},
    {name: "Speaker", price: 700, quanitiy: 15, lowStockLevel:5},
    {name: "TV", price: 1600, quanitiy: 6, lowStockLevel:2},
];
console.log(inventory);

// Task 2 Create a Function to Display Product Details
function displayProductDetails(product) {
const status = product.quanitiy <= product.lowStockLevel ? "Low Stock" : "In Stock";
return ` The ${product.name}'s price is $${product.price} and there are ${product.quanitiy} left so it is ${status} but the low level stock is ${product.lowStockLevel}`
}
console.log(displayProductDetails(inventory[0]));








    
