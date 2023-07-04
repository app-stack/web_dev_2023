CREATE DATABASE SALES;
USE SALES;

CREATE TABLE tb_produit (
id_produit int primary key auto_increment not null,
name_produit varchar (50),
description_produit text,
price_produit float,
id_category int
) Engine=InnoDB;

CREATE TABLE tb_category (
id_category int primary key auto_increment not null,
name_category varchar (50)
) Engine=InnoDB;

CREATE TABLE tb_seller (
id_seller int primary key auto_increment not null,
name_seller varchar (50),
first_name_seller varchar (50)
) Engine=InnoDB;

CREATE TABLE tb_receipt (
id_receipt int primary key auto_increment not null,
date_receipt datetime,
id_seller int
) Engine=InnoDB;

create table ajouter (
id_produit int not null,
id_receipt int not null,
primary key(id_produit, id_receipt)
)Engine=InnoDB;

alter table ajouter
add constraint fk_ajouter_produit
foreign key(id_produit)
references tb_produit (id_produit);

alter table ajouter
add constraint fk_ajouter_receipt
foreign key(id_receipt)
references tb_receipt(id_receipt);

alter table tb_produit
add constraint fk_completer_produit
foreign key(id_category)
references tb_category(id_category);

alter table tb_receipt
add constraint fk_vendeur_receipt
foreign key(id_seller)
references tb_seller (id_seller);






