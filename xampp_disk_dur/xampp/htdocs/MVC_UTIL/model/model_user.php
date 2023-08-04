<?php
// ajouter un utilisateur -----------------------------------------------------------------------------------
function adduser($bdd,$nom,$prenom,$mail,$mdp){
    try{
        $req = $bdd->prepare('INSERT INTO utilisateur(nom_util, prenom_util, mail_util, mdp_util) 
        VALUES(:nom_util, :prenom_util, :mail_util, :mdp_util)');
        $req->execute(array(
            'nom_util' => $nom,
            'prenom_util' =>$prenom,
            'mail_util' =>$mail,
            'mdp_util' =>$mdp
            ));
    }
    catch(Exception $e)
    {
        //affichage d'une exception en cas d’erreur
        die('Erreur : '.$e->getMessage());
    }
}


// function showUser($bdd){
//     try {
//         $req = $bdd->prepare('SELECT * FROM utilisateur');
//         $req->execute();
//         while ($data = $req->fetch()){
//             echo '<p>Nom : '.$data['nom_util'].' prenom : '.$data['prenom_util'].' 
//             mail: '.$data['mail_util'].'</p>';
//         }
//     } catch (Exception $e) {
//         die('Erreur : '.$e->getMessage());
//     }
// }

function showUser($bdd){
    try {
        $req = $bdd->prepare('SELECT * FROM utilisateur');
        $req->execute();
        $data= $req->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    } catch (Exception $e) {
        die('Erreur :' .$e->getMessage());
    }
}

function modifUser($bdd,$nom,$prenom,$mail,$mdp,$data){
    try {
        $req = $bdd->prepare('UPDATE utilisateur SET nom_util = :nom_util, prenom_util = :prenom_util, mail_util = :mail_util, mdp_util = :mdp_util WHERE id_util = :id_util');
        $req->execute(array(
            'id_util' => $data,
            'nom_util' => $nom,
            'prenom_util' => $prenom,
            'mail_util' => $mail,
            'mdp_util' => $mdp
        ));
    } catch (Exception $e) {
        die('Erreur : '.$e->getMessage());
    }
}

function getUser($bdd, $data):array {
    try{
        $req = $bdd->prepare("SELECT * FROM utilisateur WHERE id_util = :id_util");
        $req->execute(array(
            'id_util' => $data,  
        ));
        $data2 = $req->fetchAll(PDO::FETCH_ASSOC);
        return $data2;
    }
    catch(Exception $e)
    {
        //affichage d'une exception en cas d’erreur
        die('Erreur : '.$e->getMessage());
    }
}


function deleteUser($bdd,$data){
    try {
        $req = $bdd->prepare('DELETE FROM utilisateur WHERE id_util=:id_util');
        $req->execute(array(
            'id_util'=>$data,
        ));

    } catch (Exception $e) {
        die('Erreur :' .$e->getMessage());
    }
}

?>