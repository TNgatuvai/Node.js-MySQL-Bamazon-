var mysql = require("mysql");

var inquirer = require("inquirer");

let connection = mysql.createConnection( {
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_DB",

});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    loadProducts();
  });

// Function to load the products table from the database and print results to the console
function loadProducts() {
    // Selects all of the data from the MySQL products table
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
  
      // Draw the table in the terminal using the response
      console.table(res);
  
      // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
      promptCustomerForItem(res);
    });
  }  