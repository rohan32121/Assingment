// 3. Build a feature for Store's Inventory.

// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees




const storeInventory = {
    item1: 10, 
    item3: 30,
    item4: 40
  };
  
  const exchangeRate = 80;
  
  
  const convertedInventory = Object.entries(storeInventory).map(([item, price]) => {
    return { [item]: price * exchangeRate };
  });
  
  
  console.log("Converted Inventory:");
  console.log(convertedInventory);
  