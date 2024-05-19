<?php 
    include("../conexion.php");
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        try {
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);
            $filter = 'no filter';
            
            
            $sql = "SELECT * FROM tbl_employees";
            if (isset($data['filter'])) {
                $filter = $data['filter'];
                $sql .= " WHERE state=$filter ";
            } 

            $sql .= " ORDER BY id ASC";




            $query = $conn -> prepare($sql);
            $query -> execute();
            $results = $query -> fetchAll(PDO::FETCH_OBJ);

            $response = [
                'status' => 'success',
                'filter' => $filter,
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