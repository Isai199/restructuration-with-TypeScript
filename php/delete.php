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
        
        if (isset($data['idEmployee'])) {
            
            $id = $data['idEmployee'];

            // TODO: esta consulta no elimina al empleado
            $consulta = "DELETE FROM tbl_employees WHERE id =:id";
            $sql = $conn-> prepare($consulta);
            $sql -> bindParam(':id', $id, PDO::PARAM_INT);
            $id = trim($id);
            
            echo json_encode(['status' => 'success', 'message' => 'Data was deleted']);
            exit;
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Date not provided']);
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




////////////// Eliminar registro de la tabla en la bds/////////

$sql->execute();
echo 'Data removed successfully.';




// TODO: analizar este codigo para cuando agregue la opcion xml
// //eliminar la consulta del xml

// $bds_id=$_POST['id'];

// $users = simplexml_load_file('files/members.xml');
// //we're are going to create iterator to assign to each user
// $index = 0;
// $i = 0;

// foreach($users->user as $user){
//   if($user->id == $bds_id ){
//     $index = $i;
//     break;
//   }
// $i++;
// }

// unset($users->user[$index]);
// file_put_contents('files/members.xml', $users->asXML());



?>
