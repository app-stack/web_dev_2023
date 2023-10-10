-- créer la database

create database if not exists eglise;
use eglise;

-- créer les tables

create table users(
id_users int primary key auto_increment not null,
first_name_users varchar (50) not null,
name_users varchar (50) not null,
email_users varchar (100) unique not null,
password_users varchar (100) unique not null,
image_users varchar (50) 
)Engine=InnoDB;

create table categories(
id_categories int primary key auto_increment not null,
name_categories varchar(50) not null
)Engine=InnoDB;

create table questions(
id_questions int primary key auto_increment not null,
title_questions varchar (50) not null,
content_questions varchar(50) not null,
id_categories int
)Engine=InnoDB;


create table quiz(
id_quiz int primary key auto_increment not null,
theme_quiz varchar (50)
)Engine=InnoDB;

create table answers(
id_answers int primary key auto_increment not null,
title_answers varchar (50),
content_reponses varchar (50),
good_answers tinyint (1) default 0,
id_questions int not null
)Engine=InnoDB;

-- créer les tables d'association

create table attempt_quiz(
attempt_quiz int not null,
id_users int not null,
id_quiz int not null,
id_answers int not null,
primary key (attempt_quiz, id_users, id_quiz, id_answers) 
)Engine=InnoDB;


create table quiz_questions(
id_quiz int not null,
id_questions int not null,
primary key (id_quiz, id_questions) 
)Engine=InnoDB;


-- contraintes foreign keys

alter table questions
add constraint fk_rattacher_id_categories
foreign key (id_categories)
references categories (id_categories);

alter table answers
add constraint fk_avoir_id_questions
foreign key (id_questions)
references questions (id_questions);



