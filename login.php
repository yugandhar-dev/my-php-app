<?php
    session_start();
    include('db.php');
    $username = $_POST['username'];
    $password = $_POST['password'];
    
      if(isset($_POST['g-recaptcha-response'])){
        $captcha=$_POST['g-recaptcha-response'];
        
      }
      if(!$captcha){
        $_SESSION["errorMsg"] = "Please check the the captcha form.";
        header('Location: index.php');
        exit;
      }
      $secretKey = "6LcN-vsUAAAAAAgyTM1JucKuvWxnJJdqTcpnIo3b";
      $ip = $_SERVER['REMOTE_ADDR'];
      
      $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $secretKey .  '&response=' . $captcha;
      
      $response = curl_init();
      curl_setopt($response, CURLOPT_URL, $url);
    
      curl_setopt($response, CURLOPT_RETURNTRANSFER, true);
      $client = curl_exec($response);
      $responseKeys = json_encode($client,true);
      curl_close($response);
      if($responseKeys) {
        $sql = "SELECT PASSWORD FROM login where USERNAME =:userNname";
        $stmt = OCIPARSE($connect, $sql);
        
        ocibindbyname($stmt, ":userNname", $username);
        
        OCIEXECUTE($stmt);
        $data = array();
        while(OCIFETCH($stmt)) {
            $res = OCIRESULT($stmt, 1);
        }
    
        if(password_verify($password, $res)) {
            // session_start();
            $_SESSION["userLogin"] = $username;
            header('Location: user.html');
            exit;
        }else {
            // session_start();
            $_SESSION["errorMsg"] = "Username or password incorrect";
            header('Location: index.php');
            exit;
        }
      } else {
        $_SESSION["errorMsg"] = "Captcha error! Please try again.";
        header('Location: index.php');
        exit;
      }

    
    
?>