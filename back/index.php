<?php
//require_once './api/class/Database.php';
//require_once './api/class/User.php';

//$database = new Database();
//$db = $database->getConnection();
//
//var_dump($database);
//echo '</br>';
//var_dump($db);

$database = new PDO ("mysql:host=localhost;dbname=apiska", 'root', '');
var_dump($database);
