<?php
require_once("config.php");

filter_var($_GET["indicatorID"], FILTER_SANITIZE_STRING);

$DATADB = "datavalues_2019";
$CSVDB = "datavalues_2019";
$WORLDBANKDB = "datavalues_worldbank_3";

$queryExtractions = "SELECT * FROM extractions WHERE active = 1";
$resultExtractions = $link->query($queryExtractions);
while($row = mysqli_fetch_array($resultExtractions)) {
    if($row["source"] == "csv") $CSVDB = "datavalues_csv_".$row["id"];
    if($row["source"] == "worldbank") $WORLDBANKDB = "datavalues_worldbank_".$row["id"];
}


$queryIndicator = "SELECT datasource FROM indicators_jan2020 WHERE id = ".$_GET["indicatorID"];
$resultIndicator = $link->query($queryIndicator);
while($row = mysqli_fetch_array($resultIndicator)) {
    if($row["datasource"] == "worldbank") $DATADB = $WORLDBANKDB;
    else $DATADB = $CSVDB;
}

$INDICATORITEMDATA = array();

$queryGeobase = "SELECT * FROM ".$DATADB." WHERE indicator_id = '".$_GET["indicatorID"]."'" or die("Error in the consult.." . mysqli_error($link));
$resultGeobase = $link->query($queryGeobase);

while($row = mysqli_fetch_assoc($resultGeobase)) {
    array_push($INDICATORITEMDATA, $row);
}

$RESULTS = array(
    "indicatorItemData" => $INDICATORITEMDATA
);

echo json_encode($RESULTS);
?>