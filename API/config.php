<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

/*
$selectedDB = 'paris21';
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';
*/

$dbhost = '192.168.1.2';
$dbuser = 'anthony.gesec';
$dbpass = '2xzQRixT5V';
$selectedDB = 'ocde';


$link = mysqli_connect($dbhost,$dbuser,$dbpass,$selectedDB) or die("Error " . mysqli_error($link));
$link->set_charset("utf8");
?>