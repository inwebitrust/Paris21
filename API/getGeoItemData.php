<?php
require_once("config.php");

filter_var($_GET["geoIDSList"], FILTER_SANITIZE_STRING);

$CSVDB = "datavalues_2019";
$WORLDBANKDB = "datavalues_worldbank_3";

$queryExtractions = "SELECT * FROM extractions WHERE active = 1";
$resultExtractions = $link->query($queryExtractions);
while($row = mysqli_fetch_array($resultExtractions)) {
    if($row["source"] == "csv") $CSVDB = "datavalues_csv_".$row["id"];
    if($row["source"] == "worldbank") $WORLDBANKDB = "datavalues_worldbank_".$row["id"];
}

$idsArray = explode(',',$_GET['geoIDSList']);
$GEOITEMSDATACSV = array();
$GEOITEMSDATAWB = array();

$queryGeobaseCSV = "SELECT * FROM ".$CSVDB." WHERE m49 IN (".$_GET["geoIDSList"].")" or die("Error in the consult.." . mysqli_error($link));
$resultGeobaseCSV = $link->query($queryGeobaseCSV);
while($row = mysqli_fetch_assoc($resultGeobaseCSV)) {
    array_push($GEOITEMSDATACSV, $row);
}

$queryGeobaseWB = "SELECT * FROM ".$WORLDBANKDB." WHERE m49 IN (".$_GET["geoIDSList"].")" or die("Error in the consult.." . mysqli_error($link));
$resultGeobaseWB = $link->query($queryGeobaseWB);
while($row = mysqli_fetch_assoc($resultGeobaseWB)) {
    array_push($GEOITEMSDATAWB, $row);
}

$RESULTS = array(
    "geoItemsDataCSV" => $GEOITEMSDATACSV,
    "geoItemsDataWB" => $GEOITEMSDATAWB
);

echo json_encode($RESULTS);

?>