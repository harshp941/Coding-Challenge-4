//Create an Inventory Array of Product Objects
let inventory = [
    {name: "Laptop", price: 1400, quantity: 12, lowStockLevel:4},
    {name: "Keyboard", price: 900, quantity: 10, lowStockLevel:1}, // These are random items
    {name: "Mouse", price: 1100, quantity: 8, lowStockLevel:3},
    {name: "Speaker", price: 700, quantity: 4, lowStockLevel:5},
    {name: "TV", price: 1600, quantity: 6, lowStockLevel:2},
];
console.log(inventory);

// Task 2 Create a Function to Display Product Details
function displayProductDetails(product) {
const status = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
return ` The ${product.name}'s price is $${product.price} and they are ${status}`
}
console.log(displayProductDetails(inventory[0]));
console.log(displayProductDetails(inventory[1]));
console.log(displayProductDetails(inventory[2]));
console.log(displayProductDetails(inventory[3]));
console.log(displayProductDetails(inventory[4]));

// Task 3 Create a Function to Update Product Stock After Sales
function updateStock(inventory, unitsSold) {
    let newStock = inventory.quantity -= unitsSold;
    return `${inventory.name} quantity after sales is ${newStock}`
}
console.log(updateStock(inventory[0], 10));
   
// Task 4 Create a Function to Check Low Stock Products
function checkLowStock(inventory) {
    inventory.forEach(inventory => { 
    if (inventory.quantity <= inventory.lowStockLevel)
    return console.log(`Product with Low Stock Level: ${inventory.name}`);}
    )
}
console.log(checkLowStock(inventory));

// Task 5 Create a Function to Calculate Total Inventory Value
function calculateInventoryValue() {
     return inventory.reduce((totalValue, inventory) => {
        return totalValue + (inventory.price * inventory.quantity)},0);
};
const inventoryTotalValue = calculateInventoryValue(inventory);
console.log(`The total inventory value is $${inventoryTotalValue}`);
 


    






    
