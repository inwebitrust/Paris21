<?php
require_once("config.php");

$REGION_GROUPS = array();

$querySubregion = "SELECT  subregion, subregion_code, count(*) as count FROM ".$DBTABLES["geobase"]." WHERE country <> '' GROUP BY subregion";
$result = $link->query($querySubregion);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, $row);
}

$queryRegion = "SELECT  region, region_code, count(*) as count FROM ".$DBTABLES["geobase"]." WHERE country <> '' GROUP BY region";
$result = $link->query($queryRegion);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, $row);
}

$queryWorld = "SELECT count(*) as count FROM ".$DBTABLES["geobase"]." WHERE country <> ''";
$result = $link->query($queryWorld);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, array(
    	"0" => "World",
    	"1" => "1",
    	"count" => $row["count"]
    ));
}

$queryLDC = "SELECT count(*) as count FROM ".$DBTABLES["geobase"]."` WHERE ldc = '1'";
$result = $link->query($queryLDC);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, array(
    	"0" => "LDC",
    	"1" => "9994",
    	"count" => $row["count"]
    ));
}

$queryLLDC = "SELECT count(*) as count FROM ".$DBTABLES["geobase"]." WHERE lldc = '1'";
$result = $link->query($queryLLDC);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, array(
    	"0" => "LLDC",
    	"1" => "9995",
    	"count" => $row["count"]
    ));
}

$querySIDS = "SELECT count(*) as count FROM ".$DBTABLES["geobase"]." WHERE sids = '1'";
$result = $link->query($querySIDS);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, array(
    	"0" => "SIDS",
    	"1" => "9997",
    	"count" => $row["count"]
    ));
}

$queryFragile = "SELECT count(*) as count FROM ".$DBTABLES["geobase"]." WHERE fragile = '1'";
$result = $link->query($queryFragile);
while($row = mysqli_fetch_array($result)) {
    array_push($REGION_GROUPS, array(
    	"0" => "Fragile",
    	"1" => "9998",
    	"count" => $row["count"]
    ));
}

$queryIncome = "SELECT income, count(*) as count FROM ".$DBTABLES["geobase"]." GROUP BY income";
$result = $link->query($queryIncome);
while($row = mysqli_fetch_array($result)) {
	if($row["income"] != "") {
		array_push($REGION_GROUPS, array(
	    	"0" => $row["income"],
	    	"1" => $row["income"],
	    	"count" => $row["count"]
	    ));
	}
}

echo json_encode($REGION_GROUPS);

?>