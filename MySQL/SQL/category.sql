SELECT * FROM ticket.category;
-- insert into category (name_category) values ("alimentaire"), ("produit"), ("loisir");
insert into category (name_category) values ("alimentaire");
insert into category (name_category) values ("produit");
insert into category (name_category) values ("loisir");
-- insert into product (name_product) values ("tomates"), ("pain"), ("lessive");
insert into product(name_product, description_product, price_product, id_category) values ("tomate", "paquet de 3 kg de tomate", 4.20, 1); 
insert into product(name_product, description_product, price_product, id_category) values ("pain", "baguette de 350gr", 0.90, 1); 
insert into product(name_product, description_product, price_product, id_category) values ("lessive", "paquet de 1kg", 14.30, 2); 
insert into product(name_product, description_product, price_product, id_category) values ("livre", "livre sur le cinéma", 29.99, 3); 
-- insert into seller (name_sellers) values ("Dupond Sophie"), ("Marc Albert");
insert into seller(name_seller, first_name_seller) values ("Dupond", "Sophie"); 
insert into seller(name_seller, first_name_seller) values ("Marc", "Albert"); 

-- Ajouter dans la table receipt
INSERT INTO receipt(date_receipt, id_seller) VALUES
("2023-02-03", 1),
("2023-05-06", 2),
("2023-07-14", 2);
-- Ajouter dans la table association to_add
INSERT INTO to_add(id_product, id_receipt, qtx_add) VALUES
(2,1,5),
(1,3,2),
(3,2,1),
(4,1,2);

