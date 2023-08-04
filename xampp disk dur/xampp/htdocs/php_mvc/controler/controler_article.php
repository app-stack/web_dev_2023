
<?php
include '../view/vue_article.php';
include '../utils/connect_bdd.php';
include '../model/model_article.php';



if (isset($_POST['article'])&&!empty($_POST['article'])&&isset($_POST['prix'])&&!empty($_POST['prix'])) {
    

    $ajouterArticle = new Article($_POST['nom_article'], $_POST['prix_article']);



    $ajouterArticle->addArticleV2($bdd);

    echo ('enregistré');
}else{
    echo 'merci de remplir les champs';
}

?>