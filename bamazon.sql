CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  Item_ID INT NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(45) NULL,
  Department_Name VARCHAR(45) NULL,
  Price DECIMAL(10, 2) NULL,
  Stock_Quantity INT NULL,
  PRIMARY KEY (Item_ID)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Xbox 1", "Technology", 199.99, 100);
       ("Beats Pro", "Technology", 149.99, 100);
       ("MacBook Pro", "Technology", 1776.99, 100);
       ("Apple Track Pad", "Technology", 139.99, 100);
       ("Apple Keyboard", "Technology", 174.40, 240);
       ("Aladdin", "Movies", 29.99, 365);
       ("Lion King", "Movies", 29.99, 145);
       ("Start With Why", "Books", 18.50, 75);
       ("Programming for dummies", "Books", 9.99, 55);
       ("The Speed of Trust", "Books", 13.99, 60);

SELECT * FROM products;