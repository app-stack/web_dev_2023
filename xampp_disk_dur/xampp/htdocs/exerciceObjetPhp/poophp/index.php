
<?php
    require './vehicule.php';


$voiture = new Vehicule("Mercedes CLK",4,250);
$moto = new Vehicule('Honda CBR',2,280);
echo '<br>';
echo '<br>';

echo $voiture->getNomVehicule();
echo '<br>';
echo $voiture->getNbrRoue();
echo '<br>';
echo $voiture->getVitesse();
echo '<br>';

$voiture->demarrage();
echo '<br>';
$voiture->detect();
echo '<br>';
$voiture->boost();
echo '<br>';
echo $voiture->getVitesse();
echo '<br>';

echo $moto->fast($voiture);


// $voiture->detect();
// echo '<br>';
// $moto->detect();


// echo '<br>';
// $voiture->boost();
// var_dump($voiture);

// // echo '<br>';
// // echo $voiture->vitesse;
// // echo '<br>';

// echo '<br>';

// $voiture->fast($moto);


    /* ----------------------- 
    
        exercoce avec class.php

    ---------------------------- */

    // require './class.php';
    // $voiture = new Vehicule('Peugot',4,130);

    // var_dump($voiture);

    // // $voiture->nomVehicule = 'coucou';
    // // $voiture->nbrRoue = 4;
    // // $voiture->vitesse = 130;

    // echo '<br>';
    // var_dump($voiture);
    // echo '<br>';

    // echo $voiture->nomVehicule;
    // echo '<br>';
    // $voiture->demarrage();




?>