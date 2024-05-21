
<?php



try {
     include('./db-connection.php');
     $response = [
          'status' => 'success',
          'message' => 'the connection was a success',  
     ];

     echo json_encode($response);
     
} catch (PDOException $e) {
     echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}



?>
