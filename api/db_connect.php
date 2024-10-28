<?php 

  header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

  	$db_host = 'localhost' ;
    $db_username = 'root' ;
  	$db_password = '' ;
    $db_name = 'lab' ;    
    $mysqli = new mysqli($db_host,$db_username,$db_password,$db_name);


   if($mysqli->connect_error) {
     die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
  }

 ?>