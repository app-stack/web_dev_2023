-- Afficher la liste des membres du personnel avec leur id, nom, prénom, nom de poste,
select id_personnel, nom_personnel, prenom_personnel, nom_poste
from personnel inner join poste on personnel.id_poste = poste.id_poste;
-- Afficher la liste des livreurs avec leur id, nom, prénom,
select id_personnel, nom_personnel, prenom_personnel
from personnel inner join poste on personnel.id_poste = poste.id_poste
WHERE nom_poste = 'Livreur';
-- Afficher la liste des produits de type alimentaire avec leur id, nom, description, image, tarif, stock
select id_produit, nom_produit, description_produit, image_produit, prix_produit, stock_produit
from produit inner join categorie on produit.id_categorie = categorie.id_categorie;
-- Afficher la liste des produits du ticket 2 avec leur nom, description, prix, quantité ajouté
select nom_produit, description_produit, prix_produit, quantite from ajouter
inner join produit on ajouter.id_produit = produit.id_produit
where ajouter.id_ticket = 2;
-- Calculer le prix TTC de chaque produit (prix *quantité) pour le ticket 7
select nom_produit,(prix_produit*quantite) as 'prix total' from ajouter
inner join produit on ajouter.id_produit = produit.id_produit
where ajouter.id_ticket = 7;
-- Calculer combien de fois le produit Lait a été ajouté sur un ticket
select count(ajouter.id_produit) as 'nbr de fois lait' from ajouter
inner join produit on ajouter.id_produit = produit.id_produit
where produit.nom_produit = 'lait';
-- Afficher la liste des produits avec le nombre de fois où ils ont été ajouté sur un ticket
select nom_produit, count(ajouter.id_produit) as 'nbr de fois ajouté' from ajouter 
inner join produit on ajouter.id_produit = produit.id_produit group by ajouter.id_produit;
-- Calculer le montant TTC du ticket 11 somme (des produits*quantité)
select sum(prix_produit*quantite) as 'montant ttc'from ajouter inner join produit
on ajouter.id_produit = produit.id_produit
where ajouter.id_ticket = 11;
-- Afficher la liste des vendeurs avec le nombre de fois où ils ont été ajouté sur un ticket
select nom_personnel, prenom_personnel, count(ticket.id_personnel) as 'Nbr de fois sur un ticket'
from ticket inner join personnel on ticket.id_personnel = personnel.id_personnel 
group by ticket.id_personnel;
-- Calculer le chiffre d’affaire des produits vendus au mois de février 2023
select sum(quantite*prix_produit) as 'chiffre affaire' from ajouter inner join
produit on ajouter.id_produit = produit.id_produit inner join ticket
on ajouter.id_ticket = ticket.id_ticket where month(date_ticket) = 2;
-- Calculer le chiffre d’affaire pour le vendeur Bourhis Julie
select sum(quantite*prix_produit) as 'Chiffre affaire', ajouter.id_ticket from ajouter 
inner join produit on ajouter.id_produit = produit.id_produit
inner join ticket on ajouter.id_ticket = ticket.id_ticket
inner join personnel on ticket.id_personnel = personnel.id_personnel
where nom_personnel = 'Bourhis' and prenom_personnel = 'Julie';
-- Afficher la liste des produits avec le chiffre d’affaire total (produits vendus * quantité /ticket)
select nom_produit, description_produit, prix_produit, image_produit, sum(quantite*prix_produit) 
as 'Chiffre affaire' from ajouter inner join produit on ajouter.id_produit = produit.id_produit
group by ajouter.id_produit;
-- Afficher la liste des vendeurs avec leur nom, prénom, chiffre d’affaire total (produits *quantité / ticket)
select nom_personnel, prenom_personnel, sum(quantite*prix_produit) as 'Chiffre affaire vendeur' 
from ajouter
inner join produit on ajouter.id_produit = produit.id_produit
inner join ticket on ajouter.id_ticket = ticket.id_ticket
inner join personnel on ticket.id_personnel = personnel.id_personnel
inner join poste on personnel.id_poste = poste.id_poste
where poste.nom_poste = 'Vendeur'
group by personnel.id_personnel; 
