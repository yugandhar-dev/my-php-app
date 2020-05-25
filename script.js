function getDetails() {
  var url = "display.php";
  var request = new XMLHttpRequest();
  request.open("GET", url + "?team=dbData");
  request.responseType = "json";
  request.onload = function () {
    var obj = request.response;
    var data_size = Object.keys(obj).length;
    var tableHeadRef = document
      .getElementById("myDisplayTable")
      .getElementsByTagName("thead")[0];
    var tableRef = document
      .getElementById("myDisplayTable")
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
      var idText = document.createTextNode(obj[i].empId);
      empid.appendChild(idText);
      var firstText = document.createTextNode(obj[i].firstName);
      first.appendChild(firstText);
      var lastText = document.createTextNode(obj[i].lastName);
      last.appendChild(lastText);
    }
  };
  request.send();
}

$(function () {
  $("#nav-bar").load("nav.html");
});

window.onload = getDetails();
