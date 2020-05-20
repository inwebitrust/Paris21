<!DOCTYPE html>
<!-- (C) 2013-present  SheetJS http://sheetjs.com -->
<!-- vim: set ts=2: -->
<html>
<head>
</head>
<body>
<script type="text/javascript" src="//unpkg.com/xlsx/dist/xlsx.full.min.js"></script>

<script>

function doitbis(type){
	var wb = XLSX.utils.book_new();
	wb.SheetNames.push("Test Sheet");
	var tableArray = [
        ["Indicator", "Country", "Year", "Data Value"]
    ];
    var ws = XLSX.utils.aoa_to_sheet(tableArray);
    wb.Sheets["Test Sheet"] = ws;
    return XLSX.writeFile(wb, ('SheetJSTableExport.' + (type || 'xlsx')));
}

doitbis("xlsx");

window.close();
</script>

</body>
</html>
