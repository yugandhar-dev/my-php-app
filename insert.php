<?php

    $button_text = $_GET['btnText'];
    if ($button_text == "employees.json") {
        $emp_id = $_GET['id'];
        $first_name = $_GET['fName'];
        $last_name = $_GET['lName'];
    
        $employee = new StdClass;
        $employee->id = $emp_id;
        $employee->firstname = $first_name;
        $employee->lastname = $last_name;
    
        $newEmp = json_encode($employee);
    
        $empArr = file_get_contents('employees.json');
        $empDecode = json_decode($empArr);
        array_push($empDecode, $employee);
        file_put_contents('employees.json', json_encode($empDecode));
    
        $created = array();
        $response['message'] = "Account inserted successfully into employees.json file";
        array_push($created, $response);
        echo json_encode($created);
    } else {
        include("db.php");
        $emp_id = $_GET['id'];
        $first_name = $_GET['fName'];
        $last_name = $_GET['lName'];

        $sql = "INSERT into employees(employee_id,firstname,lastname) values(:id,:fname,:lname)";
        $stmt = OCIPARSE($connect, $sql);
        ocibindbyname($stmt, ":id", $emp_id);
        ocibindbyname($stmt, ":fname", $first_name);
        ocibindbyname($stmt, ":lname", $last_name);
        OCIEXECUTE($stmt);
        $created = array();
        $response['message'] = "Account inserted successfully into employees table";
        array_push($created, $response);
        echo json_encode($created);
    }
    
?>