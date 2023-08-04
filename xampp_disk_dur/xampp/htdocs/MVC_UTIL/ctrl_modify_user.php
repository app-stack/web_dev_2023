<?php
// importer la connexion BDD
include './utils/connectBdd.php';
// importer le model 
include './model/model_user.php';
// import header
include './view/view_header.php';

// importer view add user
include './view/view_modif_user.php';


if (isset($_GET['id']) AND !empty($_GET['id'])) {
    $data=$_GET['id'];
    $list = getUser($bdd,$data);
    echo '<script>
    remplirChamp("'.$list[0]['nom_util'].'", "'.$list[0]['prenom_util'].'", "'.$list[0]['mail_util'].'", 
    "'.$list[0]['mdp_util'].'");
    </script>';

    if (isset($_POST['nom_util']) AND isset($_POST['prenom_util']) AND isset($_POST['mail_util']) 
    AND isset($_POST['mdp_util']) AND !empty($_POST['nom_util']) AND !empty($_POST['prenom_util']) 
    AND !empty($_POST['mail_util']) AND !empty($_POST['mdp_util'])) {

        
        $nom=$_POST['nom_util'];
        $prenom=$_POST['prenom_util'];
        $mail=$_POST['mail_util'];
        $mdp=$_POST['mdp_util'];
        
        modifUser($bdd,$nom,$prenom,$mail,$mdp,$data);
        echo 'modifié';
    }else {
        echo "merci de remplir les champs !";
    }
    


}
include './asset/style/bootstrap.js';




?>