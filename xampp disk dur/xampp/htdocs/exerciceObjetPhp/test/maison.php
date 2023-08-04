
<?php
class Maison{
    
    // public $nomMaison;
    // public $longeurMaison;
    // public $largeurMaison;
    // public $etageMaison;


    public function __construct($name,$longeur,$largeur,$etage){
        $this->nomMaison = $name;
        $this->longeurMaison = $longeur;
        $this->largeurMaison = $largeur;
        $this->etageMaison = $etage;
    }

    public function surface(){
        $res = $this->longeurMaison* $this->largeurMaison*$this->etageMaison;
        echo '<p>la surface de '.$this->nomMaison.' est égale à : '.$res.' m2 </p>';

    }
}

?>