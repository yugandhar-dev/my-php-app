<?php
    include("db.php");
    $emp_fName = $_GET['fName'];
    $emp_lName = $_GET['lName'];

    $empArr = file_get_contents('employees.json');
    $empDecode = json_decode($empArr);
    $employees_json = array();
    $count = 0;
    foreach($empDecode as $empobj){
        
        if($empobj->firstname == $emp_fName && $empobj->lastname == $emp_lName){
            $response['id'] = $empobj->id;
            $response['firstname'] = $empobj->firstname;
            $response['lastname'] = $empobj->lastname;
            array_push($employees_json, $response);
            $count += 1;
        }
    }
    if($count >= 1) {
        echo json_encode($employees_json);
    }else {

        $sql = "SELECT * FROM employees WHERE FIRSTNAME=:var1 AND LASTNAME=:var2";

        $stmt = OCIPARSE($connect, $sql);
        ocibindbyname($stmt, ":var1", $emp_fName);
        ocibindbyname($stmt, ":var2", $emp_lName);

        OCIEXECUTE($stmt);
        $data = array();
        $count = 0;
        while(OCIFETCH($stmt)) {
            $response['id'] = OCIRESULT($stmt, 1);
            $response['firstname'] = OCIRESULT($stmt, 2);
            $response['lastname'] = OCIRESULT($stmt, 3);
            array_push($data, $response);
            $count += 1;
        }
        if($count >= 1) {
            echo json_encode($data);
        }else {
            $response['message'] = "No employee found";
            array_push($data, $response);
            echo json_encode($data);
        }
    }
?>