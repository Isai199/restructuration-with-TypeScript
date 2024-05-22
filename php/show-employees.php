<?php 
    include('./db-connection.php');
    
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        try {
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);
            
            
            $sql = "SELECT * FROM tbl_employees";
            if (isset($data['filter'])) {
                $filter = $data['filter'];
                $sql .= " WHERE state=$filter ";
            } 

            $sql .= " ORDER BY id ASC";




            $query = $conn -> prepare($sql);
            $query -> execute();

            $results = $query -> fetchAll(PDO::FETCH_OBJ);
            if ($query->rowCount() > 0) {
                
    
                $response = [
                    'status' => 'success',
                    'results' => $results,  
                ];
                
                echo json_encode($response);
                exit;
            } else {
    
                $response = [
                    'status' => 'error',
                    'message' => 'No records found'  
                ];
                
                echo json_encode($response);
                exit;
            }
            
        } catch (PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
            exit;
        }


        
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
        exit;
    }



?>