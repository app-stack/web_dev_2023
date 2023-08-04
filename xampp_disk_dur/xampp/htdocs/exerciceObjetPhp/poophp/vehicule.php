
<?php

    class Vehicule{

        // attribut
        private $nomVehicule;
        private $nbrRoue;
        private $vitesse;
        // constructor
        public function __construct($name, $nbr, $vit){
            $this->nomVehicule = $name;
            $this->nbrRoue = $nbr;
            $this->vitesse = $vit;
        }
        // setter and getter
        public function getNomVehicule():string{
            return $this->nomVehicule;
        }
        public function setNomVehicule($newName):void{
            $this->nomVehicule = $newName;
        }

        public function getNbrRoue():int{
            return $this->nbrRoue;
        }
        public function setNbrRoue($newRoue):void{
            $this->nbrRoue = $newRoue;
        }

        public function getVitesse():int{
            return $this->vitesse;
        }
        
        public function setVitesse($newVitesse):void{
            $this->vitesse = $newVitesse;
        }
        
        // methodes
        public function demarrage(){
            echo ''.$this->getNomVehicule().' "à démarré"';
        }

        public function detect(){
            if ($this->getNbrRoue()==4) {
                echo ''.$this->getNomVehicule().' c\'est une voiture';
            }
            else{
                echo ''.$this->getNomVehicule().' c\'est une moto';
            }
        }

        public function boost(){
            $this->setVitesse($this->getVitesse()+50);
        }

        public function fast($b){
            if ( $this->getVitesse() < $b->getVitesse()) {
                return $b->getNomVehicule();
            }
            else {
                return  $this->getNomVehicule();
            }
        }
    }

?>