<?php
        session_start();
        if(isset($_SESSION['errorMsg']) && !empty($_SESSION['errorMsg'])) {
           echo "<p>".$_SESSION['errorMsg']."</p>";
        }
?>