<?php
require_once("config.php");

filter_var($_GET["geoIDSList"], FILTER_SANITIZE_STRING);

$idsArray = explode(',',$_GET['geoIDSList']);
$GEOITEMSDATA = array();

$queryGeobase = "SELECT * FROM datavalues_2019 WHERE m49 IN (".$_GET["geoIDSList"].")" or die("Error in the consult.." . mysqli_error($link));
$resultGeobase = $link->query($queryGeobase);

while($row = mysqli_fetch_assoc($resultGeobase)) {
    array_push($GEOITEMSDATA, $row);
}

$RESULTS = array(
    "geoItemsData" => $GEOITEMSDATA
);

echo json_encode($RESULTS);

?>