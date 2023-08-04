<?php

//----------------- import ----------------//
    include './view/view_header.php';

    // importer la connexion BDD
    include './utils/connectBdd.php';
    // importer le model 
    include './model/model_user.php';
    // importer view add user
    include './view/view_add_user.php';

    


    //---------------- test -----------//

    // vérifier la saisie des champs
    if (isset($_POST['nom_util']) AND isset($_POST['prenom_util']) AND isset($_POST['mail_util']) AND isset($_POST['mdp_util']) AND !empty($_POST['nom_util']) AND !empty($_POST['prenom_util']) AND !empty($_POST['mail_util']) AND !empty($_POST['mdp_util'])) {
        $nom=$_POST['nom_util'];
        $prenom=$_POST['prenom_util'];
        $mail=$_POST['mail_util'];
        $mdp=$_POST['mdp_util'];

        adduser($bdd,$nom,$prenom,$mail,$mdp);
        echo ''.$nom.' à été ajouté';
    }else {
        echo "merci de remplir les champs du formulaire";
    }

    include './asset/style/bootstrap.js';

?>