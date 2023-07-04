show databases;
create database test; 
drop database test ; 
create database test ; 
use test; 
CREATE USER if not exists 'raymond'@'localhost' IDENTIFIED BY 'Pass@@@ord';
-- "COMMAND NON EXECUTEE"--]
#COMMAND NON EXECUTEE/
/* COMMAND NON EXECUTEE */
GRANT ALL PRIVILEGES ON *.* TO 'raymond'@'localhost';
GRANT CREATE, SELECT, DROP ON test.* TO 'raymond'@'localhost';
CREATE TABLE tb_task (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
NAME VARCHAR (100),
email VARCHAR (255) NOT NULL,
birthday DATE) ;
ALTER TABLE tb_task 
 ADD firstname VARCHAR(100) AFTER name  ; 
CREATE INDEX index_name_task ON tb_task (firstname);
CREATE TABLE employees (
id INT NOT NULL,
nom VARCHAR (100) NOT NULL,
email VARCHAR (100) NOT NULL UNIQUE,
salaire DECIMAL (8.2) DEFAULT 3000.00,
PRIMARY KEY(id)
); 

CREATE TABLE conges (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
date_debut DATE NOT NULL,
date_fin DATE NOT NULL, 
id_employe INT,
CONSTRAINT fk_id_employe FOREIGN KEY(id_employe) REFERENCES employees(id) ON DELETE CASCADE);




















 




