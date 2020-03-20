<?php
require_once("config.php");

filter_var($_GET["indicatorID"], FILTER_SANITIZE_STRING);
filter_var($_GET["year"], FILTER_SANITIZE_STRING);
filter_var($_GET["geoType"], FILTER_SANITIZE_STRING);
filter_var($_GET["geoID"], FILTER_SANITIZE_STRING);

$DATADB = "datavalues_2019";
$CSVDB = "datavalues_2019";
$WORLDBANKDB = "datavalues_worldbank_3";

$datasource = "";
$queryDatasource = "SELECT datasource FROM ".$DBTABLES["indicators"]." WHERE id = ".$_GET["indicatorID"];
$result = $link->query($queryDatasource);
while($row = mysqli_fetch_array($result)) {
    $datasource = $row["datasource"];
}

$queryExtractions = "SELECT * FROM ".$DBTABLES["extractions"]." WHERE active = 1";
$resultExtractions = $link->query($queryExtractions);
while($row = mysqli_fetch_array($resultExtractions)) {
    if($row["source"] == "csv") $CSVDB = "datavalues_csv_".$row["id"];
    if($row["source"] == "worldbank") $WORLDBANKDB = "datavalues_worldbank_".$row["id"];
}

$nbResults = 50;

$DATADB = $CSVDB;
if($datasource == "worldbank") {
	$DATADB = $WORLDBANKDB;
}

$incomeRegions = array("9992", "9993", "9996", "9999");

if($_GET["geoID"] == "9994"){
	$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.ldc = '1' AND datavalues.m49 = geobase.m49";
} else if($_GET["geoID"] == "9995"){
	$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.lldc = '1' AND datavalues.m49 = geobase.m49";
} else if($_GET["geoID"] == "9997"){
	$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.sids = '1' AND datavalues.m49 = geobase.m49";
} else if($_GET["geoID"] == "9998"){
	$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.fragile = '1' AND datavalues.m49 = geobase.m49";
} else if(in_array($_GET["geoID"], $incomeRegions)){
	$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.income = '".$_GET["geoID"]."' AND datavalues.m49 = geobase.m49";
}else {
	if($_GET["geoType"] == "subregion") {
		$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.subregion_code = '".$_GET["geoID"]."' AND datavalues.m49 = geobase.subregion_code";
	} else if($_GET["geoType"] == "region") {
		$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND geobase.region_code = '".$_GET["geoID"]."' AND datavalues.m49 = geobase.region_code";
	} else {
		$queryAvailable = "SELECT count(*) as total FROM ".$DATADB." as datavalues, geobase_2019 as geobase WHERE datavalues.indicator_id = '".$_GET["indicatorID"]."' AND datavalues.year = '".$_GET["year"]."' AND datavalues.m49 = geobase.m49 AND geobase.iso <> ''";
	}
}

$resultAvailable = $link->query($queryAvailable);
while($row = mysqli_fetch_array($resultAvailable)) {
    $nbResults = $row["total"];
}


echo $nbResults;

?>