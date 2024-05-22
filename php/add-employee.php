<?php 


// TODO: no acepta el objeto de entrada o no lo reconoce


// address: "dafafa"
// birthday: "21-05-2024"
// birtplace: "fsffsd"
// firstname: "fsds"
// job: "rwer"
// lastname: "fdssfd"
// phone: "3232424234"
// state: "2"

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        include('./db-connection.php');
        
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);
        
        if (isset($data['firstname'])) {
            // $address = $data['address'];
            // $birthday = $data['birthday'];
            // $birtplace = $data['birtplace'];
            // $firstname = $data['firstname'];
            // $job = $data['job'];
            // $lastname = $data['lastname'];
            // $phone = $data['phone'];
            // $state = $data['state'];
            
            
            // $sql = $conn->prepare("INSERT INTO tbl_employees(firstname, lastname, birtplace, birthday, address, phone, job, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?);");
            // $result = $sql->execute([$firstname, $lastname, $birtplace, $birthday, $address, $phone, $job, $state]); # Pasar en el mismo orden de los ?
            
            
            $response = [
                'status' => 'success',
                'message' => $data['address'],
                // 'message' => 'the data was saved',  
            ];
            
            echo json_encode($response);
            
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