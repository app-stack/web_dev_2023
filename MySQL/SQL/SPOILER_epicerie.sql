create database epicerie;
use epicerie;
-- création des tables
create table produit(
id_produit int primary key auto_increment not null,
nom_produit varchar(50) not null,
description_produit text not null,
image_produit varchar(50) not null,
prix_produit decimal(4,2) not null,
stock_produit int not null,
id_categorie int,
id_marque int
)Engine=InnoDB;
create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;
create table marque(
id_marque int primary key auto_increment not null,
nom_marque varchar(50) not null
)Engine=InnoDB;
create table ticket(
id_ticket int primary key auto_increment not null,
date_ticket datetime not null,
id_personnel int
)Engine=InnoDB;
create table ajouter(
id_produit int not null,
id_ticket int not null,
quantite int not null,
primary key(id_produit, id_ticket)
)Engine=InnoDB;
create table personnel(
id_personnel int primary key auto_increment not null,
nom_personnel varchar(50),
prenom_personnel varchar(50),
id_poste int
)Engine=InnoDB;
create table poste(
id_poste int primary key auto_increment not null,
nom_poste varchar(50) not null
)Engine=InnoDB;
-- Ajout des contraintes foreign key
alter table produit
add constraint fk_attribuer_catgeorie
foreign key(id_categorie)
references categorie(id_categorie);
alter table produit
add constraint fk_detailler_marque
foreign key(id_marque)
references marque(id_marque);
alter table ajouter
add constraint fk_ajouter_produit
foreign key(id_produit)
references produit(id_produit);
alter table ajouter
add constraint fk_ajouter_ticket
foreign key(id_ticket)
references ticket(id_ticket);
alter table personnel
add constraint fk_affecter_poste
foreign key(id_poste)
references poste(id_poste);
alter table ticket
add constraint fk_vendre_personnel
foreign key(id_personnel)
references personnel(id_personnel);