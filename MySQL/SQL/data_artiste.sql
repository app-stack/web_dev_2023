-- -table classique :
-- table role_utilisateur : créer 3 rôles (utilisateur, artiste, admin),

insert into role_utilisateur(nom_role_utilisateur) values ('utilisateur'), ('artiste'), ('admin');
-- table utilisateur : créer 4 utilisateurs,
insert into utilisateur(nom_utilisateur, prenom_utilisateur, email_utilisateur, 
password_utilisateur, id_role_utilisateur) values 
('Dupond', 'Paul', 'test@test.com', md5('1234'), 1),
('Durand', 'Anne', 'anne@test.fr', md5('123456'), 2),
('Admin', 'Principal', 'adm@google.com', md5('123456'), 3),
('Albert', 'Marie', 'albmarie@atm.org', md5('qhohdnkojf'), 2);


-- table groupe : créer 3 groupes (peinture, vidéo, dessin),

insert into groupe (nom_groupe) values ('peinture'), ('vidéo'), ('dessin');
-- table categorie : créer 3 categorie (new, actualite, oeuvre),
insert into categorie (nom_categorie) values ('new'), ('actualite'), ('oeuvre');
-- table article : créer 4 articles
insert into article(titre_article, date_article, contenu_article, id_categorie, id_utilisateur) values
('Nouveau tableau', '2023-07-10 10:25:00', 'jhoiuiklfaqofjpjsqfokl', 3, 2),
('Nouvelle peinture', '2022-11-08 10:25:00', 'qsldjhfginqsw,fkmjfkf', 3, 4),
('evenement', '2023-05-21 10:25:00', 'eqdgiqjkjgpq', 1, 1),
('Nouveau film', '2022-08-12 10:25:00', 'sqfoiqzihf,nqezog', 3, 4);
-- table media créer 3 média,
insert into media(url_media, nom_media)values ('./img2.png', 'image2'),
('./video4.mp4', 'video4'),
('./video122.mp4', 'video122');
-- table commentaire : créer 5 commentaires (lier au article et utilisateur existant)
insert into commentaire (message_commentaire, date_commentaire, id_article, id_utilisateur)
values ('sfjhuhfjfkkjfj', '2022-10-11', 1, 2),
('sqjjfuhqkslnflljfl', '2023-11-25', 2, 2),
('qdfuZHFJKAQJ', '2023-06-11', 3, 4),
('FSUHfhjkhkkfkdkldlk', '2023-04-21', 3, 4),
('sqffuhazfpiaejf', '2023-08-06', 2, 2);
-- table message : créer 5 messages,
insert into message (contenu_message, date_message) values
('<wfhouhQLFK<SJFF', '2021-02-03'),
('zqFOHzsfjzfpi', '2022-02-03'),
('sojqfhioyzqihofihqzfj', '2021-09-26'),
('sqfu<sohjfnkqeoepfk', '2023-02-03'),
('qesfyiqgefhij', '2023-08-03');
-- ------------------------------------------------------------
-- -table association :
-- table envoyer (1, 3, 1), (1, 4, 2), (2,1,3),(2,3,4), (2,4,5) (expediteur, destinataire, id_message),
insert into envoyer (expediteur, destinataire, id_message) values
(1, 3, 1), (1, 4, 2), (2,1,3),(2,3,4), (2,4,5);
-- table appartenir : (1, 1), (2, 2), (3,2), (4,3) (id_utilisateur, id_groupe),
insert into appartenir (id_utilisateur, id_groupe) values
(1, 1), (2, 2), (3,2), (4,3);
-- table illustrer : (1, 1), (1,2), (2,3), (3,3) (id_article, id_media),
insert into illustrer(id_article, id_media) values
(1, 1), (1,2), (2,3), (3,3);
-- table abonner: (1,2), (1,3),(1,4), (2,1), (2,3), (3,4), (4,1) (utilisateur, abonne). 
insert into abonner (utilisateur, abonne) values
(1,2), (1,3),(1,4), (2,1), (2,3), (3,4), (4,1);