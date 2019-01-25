<?php
require_once("config.php");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$INDICATORS = array();

$queryIndicators = "SELECT * FROM indicators" or die("Error in the consult.." . mysqli_error($link));
$resultIndicators = $link->query($queryIndicators);
while($row = mysqli_fetch_assoc($resultIndicators)) {
    array_push($INDICATORS, $row);
}

$RESULTS = array(
    "indicators" => $INDICATORS
);

echo json_encode($RESULTS);

?>