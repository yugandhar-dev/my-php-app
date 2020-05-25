<?php
    include("db.php");
    $teamName = $_GET['team'];

    if($teamName == "dbData") {
        $sql = "SELECT * FROM employees";
        $stmt = OCIPARSE($connect, $sql);
        ociexecute($stmt);
    
        $data = array();
        while(OCIFETCH($stmt)){
            $response['empId'] = ociresult($stmt, "EMPLOYEE_ID");
            $response['firstName'] = ociresult($stmt, "FIRSTNAME");
            $response['lastName'] = ociresult($stmt, "LASTNAME");
            array_push($data, $response);
        }
        echo json_encode($data);
    }
    
    else if($teamName == "jsonData") {
        $employees_data = file_get_contents('employees.json');
        $employees_decode = json_decode($employees_data);
        $data = array();
        foreach($employees_decode as $empobj){
            
            array_push($data, $empobj);
            
        }
        
        echo json_encode($data);
    }
    
    
?>