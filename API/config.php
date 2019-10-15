<?php
header('Access-Control-Allow-Origin: *');  

$selectedDB = 'paris21';
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';

$link = mysqli_connect($dbhost,$dbuser,$dbpass,$selectedDB) or die("Error " . mysqli_error($link));
$link->set_charset("utf8");
?>