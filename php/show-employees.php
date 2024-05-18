<?php 
    include("../conexion.php");
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        try {
            $sql = 'SELECT * FROM tbl_employees ORDER BY id ASC';
            $query = $conn -> prepare($sql);
            $query -> execute();
            $results = $query -> fetchAll(PDO::FETCH_OBJ);

        

            
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);
        
            $response = [
                'status' => 'success',
                'original' => $data,
                'results' => $results,
                
            ];
            echo json_encode($response);
        } catch (PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => 'Connection failed']);
        }


        
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    }



?>