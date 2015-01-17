<?php 

session_start();

if (isset($_SESSION["count"]) {
  $_SESSION["count"] += 1;
}
else {
  $_SESSION["count"] = 0;
}
    
include_once("tulin.html"); 

echo $_SESSION["count"];    
    
?>

