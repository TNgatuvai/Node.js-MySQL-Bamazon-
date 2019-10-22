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