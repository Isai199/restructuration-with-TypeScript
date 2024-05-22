<?php 
$serverName = "local";
$database = "bds_employees";  
$username = "isa";
$password = "Noruega@es_un_buen_p@1s";


try {
     $dns = "sqlsrv:server=($serverName);Database=$database";
     $conn = new PDO($dns, $username, $password);
     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     
} catch (PDOException $e) {
    throw new Exception("Connection failed: " . $e->getMessage());
}


?>