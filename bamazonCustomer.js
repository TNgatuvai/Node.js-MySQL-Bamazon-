var mysql = require("mysql");

var inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_DB",

});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    loadProducts();
});

// Function to load the products table from the database and print results to the console
function loadProducts() {
    // Selects all of the data from the MySQL products table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        // Draw the table in the terminal using the response
        console.table(res);

        // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
        promptCustomerForItem(res);
    });
}

// Prompt the customer for a product ID
function promptCustomerForItem(inventory) {
    // Prompts user for what they would like to purchase
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
                validate: function (val) {
                    return !isNaN(val) || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            // Check if the user wants to quit the program
            checkIfShouldExit(val.choice);
            var choiceId = parseInt(val.choice);
            var product = checkInventory(choiceId, inventory);

            // If there is a product with the id the user chose, prompt the customer for a desired quantity
            if (product) {
                // Pass the chosen product to promptCustomerForQuantity
                promptCustomerForQuantity(product);
            }
            else {
                // Otherwise let them know the item is not in the inventory, re-run loadProducts
                console.log("\nThat item is not in the inventory.");
                loadProducts();
            }
        });
}