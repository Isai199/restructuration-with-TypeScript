<?php 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        include('./db-connection.php');
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        if ($data === null) {
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid JSON or no data received',
                'input' => $input,
                'json_last_error_msg' => json_last_error_msg()
            ]);
            exit;
        }
        
        if (isset($data['address']) && isset($data['birthday']) && isset($data['birtplace']) && isset($data['firstname']) && isset($data['job']) && isset($data['lastname']) && isset($data['phone']) && isset($data['state'])) {
            $address = $data['address'];
            $birthday = $data['birthday'];
            $birtplace = $data['birtplace'];
            $firstname = $data['firstname'];
            $job = $data['job'];
            $lastname = $data['lastname'];
            $phone = $data['phone'];
            $state = $data['state'];
            
            
            $sql = $conn->prepare("INSERT INTO tbl_employees(firstname, lastname, birtplace, birthday, address, phone, job, state) VALUES (:firstname, :lastname, :birtplace, :birthday, :address, :phone, :job, :state)");
            $sql->bindParam(':firstname', $firstname);
            $sql->bindParam(':lastname', $lastname);
            $sql->bindParam(':birtplace', $birtplace);
            $sql->bindParam(':birthday', $birthday);
            $sql->bindParam(':address', $address);
            $sql->bindParam(':phone', $phone);
            $sql->bindParam(':job', $job);
            $sql->bindParam(':state', $state);

            $sql->execute();
            //$result = $sql->execute([$firstname, $lastname, $birtplace, $birthday, $address, $phone, $job, $state]); # Pasar en el mismo orden de los ?
            
            if ($sql->rowCount() > 0) {
                $response = [
                    'status' => 'success',
                    'message' => 'the data was saved',  
                ];
                
                echo json_encode($response);
                exit;
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'No rows affected',  
                ];
                echo json_encode($response);
                exit;
            }
            
            
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Date not provided']);
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