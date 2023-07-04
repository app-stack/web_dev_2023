CREATE TABLE tb_judoka (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR (100),
firstName VARCHAR (100),
sexes CHAR(1),
birthday DATE ) ; 

CREATE TABLE tb_ceinture_judoka (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
NAME VARCHAR (100)) ;

CREATE TABLE tb_competitions (
id INT PRIMARY KEY NOT NULL auto_increment,
NAME VARCHAR (100), 
date_debut DATETIME,
date_fin DATETIME);








