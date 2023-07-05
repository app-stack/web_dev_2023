SELECT * FROM ticket.category;
-- Remplacer le nom de la catégorie alimentaire par alimentation,
UPDATE category SET name_category = "alimentation" WHERE name_category = "alimentaire";
-- Remplacer le nom de la catégorie qui à pour id_category  : 2 par autre.
UPDATE category SET name_category = "autre" WHERE id_category = 2;

-- Remplacer le prix du livre par 34.99,
UPDATE product SET price_product = 34.99 WHERE name_product = "livre";
-- Remplacer la description de la lessive par : "Lessive liquide 40 lavages",
UPDATE product SET description_product = "Lessive liquide 40 lavages" WHERE name_product = "lessive";
-- Augmenter le prix de tous les produits de 1 €.
UPDATE product SET price_product = price_product + 1;

-- Remplacer le nom et prénom du vendeur qui à pour id_seller : 1 par "Dupont, Anne",
UPDATE seller SET name_seller = "Dupont", first_name_seller = "Anne" WHERE id_seller = 1;
-- Remplacer le prénom de tous les vendeurs dont le nom est "Albert" par "Maxime".
UPDATE seller SET first_name_seller = "Maxime" WHERE name_seller = "Albert";

-- Changer la date du ticket qui à pour id_receipt : 2 par "2023/06/23".
update receipt set date_receipt = "2023/06/23" where id_receipt = 2;
-- Remplacer le vendeur lié au ticket dont la date est "2023/07/14" par "Dupont Anne"
update receipt set id_seller = 1 where date_receipt = "2023/07/14"; 

-- Augmenter le nombre de baguette de pain de 2 (+2 baguettes) sur le ticket qui pour id_receip : 1,
UPDATE to_add SET qtx_add = qtx_add + 2 WHERE id_receipt = 1 AND id_product = 2;
-- Remplacer le produit tomate du ticket 3 par la lessive,
UPDATE to_add SET id_product = 3 WHERE id_receipt = 3 AND id_product = 1;
-- Remplacer la quantité de lessive du ticket 3 par 5. (modifié)
UPDATE to_add SET qtx_add = 5 WHERE id_receipt = 3 AND id_product = 3;   

use ticket

-- Afficher la liste des catégories (id et nom) dont le nom commence par une lettre plus grande que A
SELECT id_category, name_category FROM category WHERE name_category NOT LIKE 'a%';
SELECT id_category, name_category FROM category WHERE name_category >'b';
-- Afficher la liste des produits (l'id, le nom et le prix) dont le prix est inférieur à 20,
SELECT id_product, name_product, price_product FROM product WHERE price_product <20;
-- Afficher la liste des tickets (id, date, id vendeur) qui ont comme date 2023/02/03, 
SELECT id_receipt, date_receipt, id_seller FROM receipt WHERE date_receipt = '2023/02/03';
-- Afficher la liste des vendeur avec (prenom et le nom).
SELECT first_name_seller, name_seller FROM seller;

select * from category where name_category not like 'a%';
select id_product, name_product, price_product from product where price_product < 20;
select * from receipt where date_receipt like '2023-02-03%';
select first_name_seller, name_seller from seller 
 
 
-- requête qui affiche la liste des produits avec leur catégorie
SELECT id_product, name_product, description_product, price_product, 
product.id_category, name_category FROM product 
INNER JOIN category ON product.id_category = category.id_category;
-- requête qui affiche depuis la table association to_add l'ensemble des données liées
SELECT to_add.id_receipt, to_add.id_product, name_product, description_product,
price_product, qtx_add, date_receipt,seller.first_name_seller, seller.name_seller 
FROM to_add INNER JOIN product ON to_add.id_product = product.id_product
INNER JOIN receipt ON to_add.id_receipt = receipt.id_receipt
INNER JOIN seller ON receipt.id_seller = seller.id_seller
INNER JOIN category ON product.id_category = category.id_category;

-- requête qui affiche les tickets avec le nom et prenom du vendeur lié
SELECT id_receipt id, date_receipt `date`, name_seller nom, first_name_seller prénom 
FROM receipt 
INNER JOIN seller ON receipt.id_seller = seller.id_seller;