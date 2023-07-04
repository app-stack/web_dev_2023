create database choco;
use choco;

create table tb_utilisateur (
id_utilisateur int primary key auto_increment not null ,
name_utilisateur varchar (50),
first_name_utilisateur varchar (50),
email_utilisateur varchar (100),
password_utilisateur varchar (100),
image_utilisateur varchar (100),
status_utilisateur tinyint,
id_roles int not null
) Engine=InnoDB;

create table tb_commentaire (
id_commentaire int primary key auto_increment not null ,
note_commentaire int,
contenu_commentaire varchar (50),
date_creation datetime,
status tinyint,
id_chocoblast int not null,
auteur int not null
) Engine=InnoDB;

create table tb_chocoblast (
id_chocoblast int primary key auto_increment not null ,
slogan_chocoblast text,
date_creation datetime,
status tinyint,
auteur int not null,
cible int not null
) Engine=InnoDB;

create table tb_roles (
id_roles int primary key auto_increment not null,
name_roles varchar(50)
) Engine=InnoDB;


alter table tb_utilisateur
add constraint fk_posseder_roles
foreign key(id_roles)
references tb_roles (id_roles);

alter table tb_chocoblast
add constraint fk_cibler_utilisateur
foreign key(cible)
references tb_utilisateur (id_utilisateur);

alter table tb_chocoblast
add constraint fk_effectuer_utilisateur
foreign key(auteur)
references tb_utilisateur (id_utilisateur);

alter table tb_commentaire
add constraint fk_rediger_utilisateur
foreign key(auteur)
references tb_utilisateur (id_utilisateur);

alter table tb_commentaire
add constraint fk_commenter_utilisateur
foreign key(auteur)
references tb_chocoblast (id_chocoblast);
