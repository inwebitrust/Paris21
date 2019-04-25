<?php
require_once("config.php");


$INDICATORITEMDATA = array();

$queryGeobase = "SELECT * FROM datavalues_2019 WHERE indicator_id = '".$_GET["indicatorID"]."'" or die("Error in the consult.." . mysqli_error($link));
$resultGeobase = $link->query($queryGeobase);

while($row = mysqli_fetch_assoc($resultGeobase)) {
    array_push($INDICATORITEMDATA, $row);
}

$RESULTS = array(
    "indicatorItemData" => $INDICATORITEMDATA
);

echo json_encode($RESULTS);

?>