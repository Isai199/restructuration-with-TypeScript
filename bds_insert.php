<?php
session_start();
include("conexion.php");
$file = simplexml_load_file('files/members.xml');

foreach($file->user as $row){
  $xml_id = $row->id;
  $nombres=   $row->firstname;
  $apellidos =  $row->lastname;
  $lugar_nacimiento = $row->birtplace;
  $fecha_nacimiento= $row->birthday;
  $direccion = $row->address;
  $telefono = $row->phone;
  $puesto =  $row->job;
  $estado= $row->state;
}
$sentencia = $conn->prepare("INSERT INTO tbl_employees(firstname, lastname, birtplace, birthday, address, phone, job, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?);");
$resultado = $sentencia->execute([$nombres, $apellidos, $lugar_nacimiento, $fecha_nacimiento, $direccion, $telefono, $puesto, $estado]); # Pasar en el mismo orden de los ?

$id_temporal = -1;
//cambiar el id de xml por el de la bds
$lastInsertId = $conn->lastInsertId();
$users = simplexml_load_file('files/members.xml');
foreach($users->user as $user){
  if($user->id == $id_temporal){
    $user->id = $lastInsertId;
    break;
  }
}
file_put_contents('files/members.xml', $users->asXML());
//verificar si se inserto la sentencia en la bds
if ($resultado === true) {
    # Redireccionar a la lista
    $_SESSION['message'] = 'Member added successfully';
	header("Location: add.php");
} else {
    echo "Algo salió mal. Por favor verifica que la tabla exista";
}




?>
