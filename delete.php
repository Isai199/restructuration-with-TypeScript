<?php
include("conexion.php");


//eliminar la consulta del xml

$bds_id=$_POST['id'];

$users = simplexml_load_file('files/members.xml');
//we're are going to create iterator to assign to each user
$index = 0;
$i = 0;

foreach($users->user as $user){
  if($user->id == $bds_id ){
    $index = $i;
    break;
  }
$i++;
}

unset($users->user[$index]);
file_put_contents('files/members.xml', $users->asXML());



////////////// Eliminar registro de la tabla en la bds/////////
$consulta = "DELETE FROM tbl_employees WHERE id =:id";
$sql = $conn-> prepare($consulta);
$sql -> bindParam(':id', $id, PDO::PARAM_INT);
$id=trim($_POST['id']);

$sql->execute();
echo 'Data removed successfully.';







?>
