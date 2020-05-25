function insertJson() {
  if (
    !document.getElementById("EmpId").validity.valid ||
    !document.getElementById("fname").validity.valid ||
    !document.getElementById("lname").validity.valid
  ) {
    document.getElementById("error-msg").textContent =
      "Please enter all fields";
  } else if (isNaN(document.getElementById("EmpId").value)) {
    document.getElementById("error-msg").textContent =
      "Employee id should be numerical";
  } else {
    var url = "insert.php";
    var btn = document.getElementById("json-btn").innerHTML.trim();
    console.log(typeof btn);
    var emp_id = document.getElementById("EmpId").value;
    var emp_first_name = document.getElementById("fname").value;
    var emp_last_name = document.getElementById("lname").value;

    var request = new XMLHttpRequest();
    request.open(
      "GET",
      url +
        "?id=" +
        emp_id +
        "&fName=" +
        emp_first_name +
        "&lName=" +
        emp_last_name +
        "&btnText=" +
        btn
    );
    request.responseType = "json";
    request.onload = function () {
      var obj = request.response;
      document.getElementById("insert-message").textContent = obj[0].message;
    };
    request.send();
    document.getElementById("EmpId").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
  }
}
function insertTable() {
  if (
    !document.getElementById("EmpId").validity.valid ||
    !document.getElementById("fname").validity.valid ||
    !document.getElementById("lname").validity.valid
  ) {
    document.getElementById("error-msg").textContent =
      "Please enter all fields";
  } else if (isNaN(document.getElementById("EmpId").value)) {
    document.getElementById("error-msg").textContent =
      "Employee id should be numerical";
  } else {
    var url = "insert.php";
    var btn = document.getElementById("db-btn").innerHTML.trim();
    var emp_id = document.getElementById("EmpId").value;
    var emp_first_name = document.getElementById("fname").value;
    var emp_last_name = document.getElementById("lname").value;

    var request = new XMLHttpRequest();
    request.open(
      "GET",
      url +
        "?id=" +
        emp_id +
        "&fName=" +
        emp_first_name +
        "&lName=" +
        emp_last_name +
        "&btnText=" +
        btn
    );
    request.responseType = "json";
    request.onload = function () {
      var obj = request.response;
      document.getElementById("insert-message").textContent = obj[0].message;
    };
    request.send();
    document.getElementById("EmpId").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
  }
}
