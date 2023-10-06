create database if not exists eglise;
use eglise;

create table users(
id_users int primary key auto_increment not null,
first_name_users varchar(50) not null,
name_users varchar(50) not null,
email varchar(50) not null,
password varchar(100) not null,
image varchar(50) not null
)Engine=innoDB;


