function getJson() {
  var url = "display.php";
  var request = new XMLHttpRequest();
  request.open("GET", url + "?team=jsonData");
  request.responseType = "json";
  request.onload = function () {
    var obj = request.response;
    var data_size = Object.keys(obj).length;
    var tableRef = document
      .getElementById("myDisplayTable")
      .getElementsByTagName("tbody")[0];

    for (i = 0; i < data_size; i++) {
      // Insert a row in the table at the last row
      var newRow = tableRef.insertRow();

      // Insert a cell in the row at index 0
      var empid = newRow.insertCell(0);
      var first = newRow.insertCell(1);
      var last = newRow.insertCell(2);

      // Append a text node to the cell
      var idText = document.createTextNode(obj[i].id);
      empid.appendChild(idText);
      var firstText = document.createTextNode(obj[i].firstname);
      first.appendChild(firstText);
      var lastText = document.createTextNode(obj[i].lastname);
      last.appendChild(lastText);
    }
  };
  request.send();
}

window.onload = getJson();
