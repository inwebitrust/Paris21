<?php
require_once("config.php");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$GEOBASE = array();

$queryGeobase = "SELECT * FROM geobase_2019" or die("Error in the consult.." . mysqli_error($link));
$resultGeobase = $link->query($queryGeobase);
while($row = mysqli_fetch_assoc($resultGeobase)) {
    array_push($GEOBASE, $row);
}

$RESULTS = array(
    "geography" => $GEOBASE
);

echo json_encode($RESULTS);

?>