<?php
    include("db.php");
    $password = password_hash("SIT780", PASSWORD_DEFAULT);
    $sql = "INSERT INTO login VALUES ('deakin',:var1)";
    $stmt = OCIPARSE($connect, $sql);
    ocibindbyname($stmt, ":var1", $password);
    OCIEXECUTE($stmt);
?>