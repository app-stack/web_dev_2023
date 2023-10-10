select * from article;

select MAX(id_article),contenu_article 
from article
group by contenu_article;

select group_concat(contenu_article) from article;

create database test2;
use test2;

create table stocker(id_users int, id_quiz int, id_response int, tentative int);

insert into stocker VALUES (1,1,1,2),(1,1,2,2),(1,1,3,2),(1,1,4,2),(1,1,5,2);
insert into stocker VALUES (1,2,1,4),(1,2,2,4),(1,2,3,4),(1,2,4,4),(1,2,5,4);

select * from stocker;

select max(tentative) as maximum from stocker #
where id_users = 1 and id_quiz = 1;
create table users (id int,name varchar(255),firstname varchar(255));
create table singer (id int,name varchar(255),firstname varchar(255));

select * from users;

select * 
from users
inner join singer on singer.firstname = users.firstname;