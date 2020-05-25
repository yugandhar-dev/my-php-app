function getEmployee() {
  var url = "search.php";
  var emp_first_name = document.getElementById("fName").value;
  var emp_last_name = document.getElementById("lName").value;
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    url + "?fName=" + emp_first_name + "&lName=" + emp_last_name
  );
  request.responseType = "json";
  request.onload = function () {
    var obj = request.response;
    var data_size = Object.keys(obj).length;
    var table = document.getElementById("myTable");
    //or use :  var table = document.all.tableid;
    for (var i = table.rows.length - 1; i > -1; i--) {
      table.deleteRow(i);
    }
    if (obj[0].message) {
      document.getElementById("message").textContent = "No employee found";
    } else {
      var tableHeadRef = document
        .getElementById("myTable")
        .getElementsByTagName("thead")[0];
      var tableRef = document
        .getElementById("myTable")
        .getElementsByTagName("tbody")[0];
      var newHead = tableHeadRef.insertRow();
      var empid_heading = newHead.insertCell(0);
      var first_heading = newHead.insertCell(1);
      var last_heading = newHead.insertCell(2);

      var idTextHead = document.createTextNode("Emp ID");
      empid_heading.appendChild(idTextHead);
      empid_heading.classList.add("heading-format");

      var firstTextHead = document.createTextNode("Firstname");
      first_heading.appendChild(firstTextHead);
      first_heading.classList.add("heading-format");

      var lastTextHead = document.createTextNode("Lastname");
      last_heading.appendChild(lastTextHead);
      last_heading.classList.add("heading-format");

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
    }
  };
  request.send();
}
