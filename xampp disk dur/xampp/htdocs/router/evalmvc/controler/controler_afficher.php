<?php
    //import
    include './evalmvc/utils/connectBdd.php';
    include './evalmvc/model/model_article.php';
    include './evalmvc/view/view_afficher.php';

    $article = new Article(null,null);
    $article->afficherArticle($bdd);

    

    echo "<div class='afficherArticle'> <ul>";
    
    foreach ($article->afficherArticleV2($bdd) as $value){

        
        echo '<li>Le nom du produit est : '.$value['nom_article'].'<br> avec un prix de '.$value['prix_article'].'</li>';
    }

    echo '</ul></div>';


?>