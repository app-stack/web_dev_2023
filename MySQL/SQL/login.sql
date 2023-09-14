CREATE DATABASE shop_tb;
USE shop_tb; 
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
CREATE USER 'developer'@'localhost' IDENTIFIED BY 'password****';
GRANT ALL PRIVILEGES ON shop_tb.* TO 'admin'@'localhost';
GRANT  ALTER, CREATE, DROP, INDEX, UPDATE ON shop_tb.* TO 'developer'@'localhost';
FLUSH PRIVILEGES;
CREATE TABLE Customer (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
username VARCHAR(16) NOT NULL unique,
email VARCHAR(255) NOT NULL UNIQUE, 
password VARCHAR(32) NOT NULL,
create_time TIMESTAMP)

CREATE TABLE Address (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
road number VARCHAR(100), 
email VARCHAR(255) NOT NULL UNIQUE, 
password VARCHAR(32) NOT NULL,
create_time TIMESTAMP)
