<?php
    session_start();
    if(empty($_SESSION['userLogin']) || $_SESSION['userLogin'] == ''){
        $response = array();
        $response["message"] = "No user found";
        echo json_encode($response);
    }else {
        $response = array();
        $response["message"] = $_SESSION['userLogin'];
        echo json_encode($response);
    }

    
?>