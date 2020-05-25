<?php
@ob_start();
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Home Page</title>
    <script src='https://www.google.com/recaptcha/api.js' async defer></script>
  </head>
  <body>
    <div class="form-container">
    
      <form
      
        action="login.php"
        class="form-box"
        method="post"
        autocomplete="off"
      ><h1 class="login-heading">Login Form</h1>
        <label for="username">Username</label>
        <input type="text" name="username" id="user" required />
        <label for="password">Password</label>
        <input type="password" name="password" id="pwd" required />
        <?php 
        
        if(isset($_SESSION['errorMsg'])) {
         echo '<p style="color:red;">'.$_SESSION['errorMsg'].'</p>' ;
        }
        session_unset();

        // destroy the session
        session_destroy();
        ?>
        <div class="g-recaptcha" data-sitekey="6LcN-vsUAAAAAFN8PZLPzPBx-oeLeF2nfJubin51"></div>
        <button class="submit-btn" type="submit">Login</button>
      </form>
    </div>
    
  </body>
</html>
