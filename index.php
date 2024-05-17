<?php
include("conexion.php");
?>
<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Datos de empleados</title>

	<!-- Bootstrap -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/style_nav.css" rel="stylesheet">

	<style>
		.content {
			margin-top: 80px;
		}
	</style>

</head>
<body>
	<nav class="navbar navbar-default navbar-fixed-top">
		<?php include('nav.php');?>
	</nav>
	<div class="container">
		<div class="content">
			<h2>Lista de empleados</h2>
			<hr />


						 <div class="alert alert-success alert-dismissable" style="display:none;"> </div>

						<!--<div class="alert alert-danger alert-dismissable" style="display:none;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> Error, no se pudo eliminar los datos.</div>

-->

			<form class="form-inline" method="get">
				<div class="form-group">
					<select name="filter" class="form-control" onchange="form.submit()">
						<option value="0">Filtros de datos de empleados</option>
						<?php $filter = (isset($_GET['filter']) ? strtolower($_GET['filter']) : NULL);  ?>
						<option value="1" <?php if($filter == 'Tetap'){ echo 'selected'; } ?>>Fijo</option>
						<option value="2" <?php if($filter == 'Kontrak'){ echo 'selected'; } ?>>Contratado</option>
                        <option value="3" <?php if($filter == 'Outsourcing'){ echo 'selected'; } ?>>Outsourcing</option>
					</select>
				</div>
			</form>
			<br />
			<div class="table-responsive">
			<table class="table table-striped table-hover">
				<tr>
                    <th>No</th>
					<th>Código</th>
					<th>Nombre</th>
                    <th>birtplace</th>
                    <th>birthday</th>
					<th>phone</th>
					<th>job</th>
					<th>Estado</th>
                    <th>Actions</th>
				</tr>
				<?php
				//hacer la consulta mediante pdos a la bse de datos
				if($filter){
					$sql =  "SELECT * FROM tbl_employees WHERE state=$filter ORDER BY id ASC";
					$query = $conn -> prepare($sql);
          $query -> execute();
          $results = $query -> fetchAll(PDO::FETCH_OBJ);
				}else{
					$sql =  "SELECT * FROM tbl_employees ORDER BY id ASC";
					$query = $conn -> prepare($sql);
          $query -> execute();
          $results = $query -> fetchAll(PDO::FETCH_OBJ);
				}
				if($query->rowCount() == 0){
					echo '<tr><td colspan="8">No hay datos.</td></tr>';
				}else{
					$no = 1;
					foreach($results as $row){
						echo '

						<tr>
							<td>'.$no.'</td>
							<td>'.$row -> id.'</td>
							<td> '.$row -> firstname.' '.$row -> lastname.'</td>
                            <td>'.$row -> birtplace.'</td>
                            <td>'.$row -> birthday.'</td>
							<td>'.$row -> phone.'</td>
                            <td>'.$row -> job.'</td>
							<td>';
							if($row -> state == '1'){
								echo '<span class="label label-success">Fijo</span>';
							}
                            else if ($row -> state == '2' ){
								echo '<span class="label label-info">Contratado</span>';
							}
                            else if ($row -> state == '3' ){
								echo '<span class="label label-warning">Outsourcing</span>';
							}
						echo '
							</td>
							<td>
								<a  class="btn btn-danger btn-sm  delete" data ='.$row -> id.'><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
							</td>
						</tr>

						';
						$no++;
					}
				}
				?>
			</table>
			</div>
		</div>
	</div><center>
	<p>&copy; Sistemas Web <?php echo date("Y");?></p>
		</center>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>


	<script type="text/javascript">
$(document).ready(function() {
    $('.delete').on('click', function(e) {
        e.preventDefault();
        var item = $(this).attr('data');
        var dataString = 'id='+item;

			  var element = this;
//para eliminar la consulta en el doom y bds
        $.ajax({
            type: "POST",
            url: "delete.php",
            data: dataString,
            success: function(response) {

                $('.alert-success').empty();
                $('.alert-success').append(response).fadeIn("slow");
                $(element).closest("tr").fadeOut();
            }
        });
    });
});
</script>
</body>
</html>
