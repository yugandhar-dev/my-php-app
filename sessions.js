function getSessions() {
  var url = "session.php";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.onload = function () {
    var obj = request.response;
    if (obj.message == "No user found") {
      window.location.replace("index.html");
    } else {
      document.getElementsByClassName("welcome-message")[0].textContent =
        "Welcome " + obj.message;
      document.getElementsByClassName("welcome-message")[0].style.width =
        "500px";
      document.getElementsByClassName("welcome-message")[0].style.margin =
        "auto";

      document.getElementsByClassName("welcome-message")[0].style.color =
        "white";

      console.log(obj.message);
    }
  };
  request.send();
}
