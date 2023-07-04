CREATE DATABASE shop_db;
USE shop_db;
CREATE USER 'administrator'@'localhost' IDENTIFIED BY 'P@ssw0rd';
CREATE USER 'developer'@'localhost' IDENTIFIED BY 'P@ssw0rd';

GRANT ALL PRIVILEGES ON shop_db.* TO 'administrator'@'localhost';
GRANT ALTER, CREATE, DROP, INDEX, UPDATE ON shop_db.* TO 'developer'@'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'administrator'@'localhost';
SHOW GRANTS FOR 'developer'@'localhost';

CREATE TABLE Customer (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	username VARCHAR(16) NOT NULL UNIQUE, 
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(32) NOT NULL,
	create_time TIMESTAMP
);

CREATE TABLE Address  (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	road_number INT, 
	road_name VARCHAR(100) NOT NULL,
	zip_code CHAR(5) NOT NULL,
    city_name VARCHAR(100) NOT NULL,
	country_name VARCHAR(100) NOT NULL
);

CREATE TABLE `Order`  (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	ref VARCHAR(45) NOT NULL UNIQUE, 
	date DATE NOT NULL,
	shipping_cost DECIMAL(6,2) DEFAULT 0.00,
    total_amount DECIMAL(6,2) DEFAULT 0.00
);

CREATE TABLE Product  (
	ref CHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
	description LONGTEXT,
    stock INT DEFAULT 0
);

CREATE TABLE Order_Product (
	id_order INT,
    ref_product CHAR(20),
    quantity INT DEFAULT 0,
    CONSTRAINT fk_id_order FOREIGN KEY (id_order) REFERENCES `Order`(id) ON DELETE CASCADE ON UPDATE CASCADE
);
ALTER TABLE Order_Product 
ADD CONSTRAINT fk_ref_product FOREIGN KEY (ref_product) REFERENCES Product(ref) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE City (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    zip_code CHAR(5) NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Country (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

ALTER TABLE Address 
	DROP COLUMN zip_code,
    DROP COLUMN city_name,
    DROP COLUMN country_name,
    ADD COLUMN id_city INT,
    ADD CONSTRAINT fk_id_city FOREIGN KEY (id_city) REFERENCES City(id);
    
ALTER TABLE City 
	ADD COLUMN id_country INT,
    ADD CONSTRAINT fk_id_country FOREIGN KEY (id_country) REFERENCES Country(id);
    
CREATE TABLE Category (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    description LONGTEXT,
    id_parent_category INT,
    CONSTRAINT fk_id_parent_category FOREIGN KEY (id_parent_category) REFERENCES Category (id)
);    

CREATE TABLE Product_Category (
	ref_product CHAR(20),
    id_category INT,
    CONSTRAINT fk_pc_ref_product FOREIGN KEY (ref_product) REFERENCES Product(ref) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_pc_id_category FOREIGN KEY (id_category) REFERENCES Category(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Shop (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    id_address INT,
    CONSTRAINT fk_shop_id_address FOREIGN KEY (id_address) REFERENCES Address(id)
);

ALTER TABLE Product DROP COLUMN stock;

CREATE TABLE Product_Shop (
	ref_product CHAR(20),
    id_shop INT, 
    stock INT DEFAULT 0,
    CONSTRAINT fk_ps_ref_product FOREIGN KEY (ref_product) REFERENCES Product(ref),
    CONSTRAINT fk_ps_id_shop FOREIGN KEY (id_shop) REFERENCES Shop(id)
);

ALTER TABLE `Order` 
	ADD COLUMN id_shop INT,
    ADD CONSTRAINT fk_order_id_shop FOREIGN KEY (id_shop) REFERENCES Shop(id);