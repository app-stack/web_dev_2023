insert into marque(nom_marque) values("Panzani"),
("Ariel"), ("Legal"), ("Brossard"), ("Marche"),
("Mr Propre"), ("Milka"),("Président"),("Bonne Maman"),
("Evian"),("Elle & Vire"),("Coca Cola"),("Lactel"),
("Francine"),("Sopalin");
insert into categorie(nom_categorie) values ("Alimentation"),
("Entretien"),("Boisson");
insert into produit(nom_produit, description_produit, image_produit, prix_produit, stock_produit, id_marque, id_categorie)
values ("Pâtes Penne","Paquet de 500 gr de pâtes, penne","./img/penne.png",1.80,25,1,1),
("Lessive liquide","Lessive liquide 30 lavages","./img/lessive.png",9.60,10,2,2),
("Paquet café",	"Paquet de 36 dosettes Senseo",	"./img/cafe.png",4.20,30,3,1),
("Pain","Baguette de pain 250 gr","./img/pain.png",1.10,20,4,1),
("Tomate","Tomate en barquette de 500 gr","./img/tomate.png",2.60,18,5,1),
("Eau de javel","Eau de javel en bouteille de 1 litre","./img/javel.png",1.80,40,6,2),
("Chocolat","Tablette de chocolat au lait","./img/chocolat.png",0.80,50,7,1),
("Camenbert","Camenbert 250 gr","./img/fromage.png",2.10,29,8,1),
("Madeleine","Madeleine en sachet indiviudel x12","./img/gateau.png",2.89,32,9,1),
("Bouteille eau","Pack de bouteille d'eau 1.5 litre","./img/eau.png",2.69,49,10,3),
("Beurre","Plaquette de beurre doux 250 gr","./img/beurre.png",3.19,19,11,1),
("Soda cola","Bouteille de Soda 1.5 litre","./img/coca.png",1.23,35,12,3),
("Lait","Pack de 6 bouteilles de lait de 1 litre","./img/lait.png",6.48,20,13,3),
("Farine","Farine en sac de 1 kgr","./img/farine.png",1.49,16,14,1),
("Essuie tout","Essuie Tout 3 rouleaux","./img/sopalin.png",3.24,22,15,2);
insert into poste(nom_poste) values("Gérant"),("Vendeur"),("Livreur");
insert into personnel(nom_personnel, prenom_personnel, id_poste)values
("Lambert","Capucine",1),("Margaux","Jean",2),
("Dupond","Mathys",2),("Boyer","Edouard",3),
("Picard","Iris",2),("Payet","Raphaëlle",2),
("Nguyen","Mathieu",3),("Bourhis","Julie",2);
insert into ticket(date_ticket, id_personnel)values("2023-01-22",2),
("2023-01-24",	3),("2023-01-28",5),("2023-02-05",3),("2023-02-07",2),
("2023-02-08",5),("2023-02-09",6),("2023-03-03",2),("2023-03-04",6),
("2023-03-05",8),("2023-04-09",	2),("2023-04-10",2),("2023-05-06",8),
("2023-05-07",8),("2023-05-08",3),("2023-06-02",5),("2023-06-07",8),
("2023-06-08",3),("2023-06-11",6),("2023-06-14",8);
insert into ajouter(id_ticket, id_produit, quantite)values
(1,2,2),(1,6,3),(1,15,4),(2,1,5),(2,5,2),(2,8,1),
(3,3,3),(3,4,2),(4,7,4),(4,4,6),(5,10,3),
(6,12,5),(6,9,2),(7,13,4),(7,14,1),(7,7,2),(7,11,1),
(8,3,3),(8,9,4),(9,5,5),(9,1,4),(9,11,1),(10,12,6),
(11,2,1),(11,15,2),(11,10,4),(12,7,1),(12,9,2),
(13,4,3),(13,8,2),(14,13,2),(14,11,1),(14,14,1),
(15,2,2),(15,12,3),(16,8,1),(16,4,2),(17,2,1),(17,15,2),
(18,7,3),(19,1,4),(19,5,3),(19,11,1),(20,13,4),
(20,7,3),(20,9,2),(20,3,3);
