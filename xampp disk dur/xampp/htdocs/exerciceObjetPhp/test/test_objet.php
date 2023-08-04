
<?php
require './maison.php';

$maison = new Maison('Lau',10,12,2);
var_dump($maison);

$maison->surface();

echo '<br>';
$immeuble = new Maison('Rent',8,9,7);
var_dump($immeuble);

$immeuble->surface();






?>

