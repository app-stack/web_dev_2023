<?php
    //----------------- import ----------------//

    // importer la connexion BDD
    include './utils/connectBdd.php';
    // importer le model 
    include './model/model_user.php';
    // importe le header
    include './view/view_header.php';


    // importer view add user
    include './view/view_show_all_user.php';

    
    
    $list = showUser($bdd);
    

    foreach($list as $value){
        echo '<li><input type="checkbox" name="id[]" value="'.$value['id_util'].'"> <a href="ctrl_modify_user.php?id='.$value['id_util'].'">le prenom est égal à : '.$value['prenom_util'].' le nom est est égal à :
        '.$value['nom_util'].'</a></li>';
        
    }
    echo '<input type="submit" value="supprimer">';
    echo '</ul> </form>';


    if (isset($_POST['id']) && !empty($_POST['id'])) {
        
        foreach($_POST['id'] as $value){
            deleteUser($bdd,$value);
        //     echo '<script>
        //     setTimeout(()=>{
        //     document.location.href="show_all_user.php"; 
        //     }, 1500);</script>';
        }
                    echo '<script>
            setTimeout(()=>{
            document.location.href="show_all_user.php"; 
            }, 1500);</script>';
    }

    // header('Location: show_all_user.php');


    



    include './asset/style/bootstrap.js';

?>