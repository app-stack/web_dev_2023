<?php



class Article{

    /*------------------------------------
                Attribut
    ------------------------------------*/
    private $id_article 
    private $nom_article
    private $prix_article
    

        /*------------------------------------
                Constructor
    ------------------------------------*/
    public funciton __constructor($nom,$prix){
        $this->nom_article = $nom;
        $this->prix_article = $prix;
    }

        /*------------------------------------
                getteur setteur
    ------------------------------------*/
    public function getIdArticle():int{
        return $this->id_article;
    }
    public function getNomArticle():string{
        return $this->nom_article;
    }
    public function getPrixArticle():float{
        return $this->prix_article;
    }
    public function setIdArticle($id):void{
        $this->id_article = $id;
    }
    public function setNomArticle($nom):void{
        $this->nom_article = $nom;
    }
    public function setPrixArticle($prix):void{
        $this->prix_article = $prix;
    }

        /*------------------------------------
                methodes
    ------------------------------------*/

        //version depuis l'instance de l'objet
        public function addArticleV2($bdd):void{
            $nom = $this->getNomArticle();
            $prix = $this->getPrixArticle();
            try{
                $req = $bdd->prepare('INSERT INTO article(nom_article, prix_article) 
                VALUES(:nom_article, :prix_article)');
                $req->execute(array(
                    'nom_article' => $nom,
                    'prix_article' =>$prix
                    ));
            }
            catch(Exception $e)
            {
                //affichage d'une exception en cas d’erreur
                die('Erreur : '.$e->getMessage());
            }
        }
}








?>