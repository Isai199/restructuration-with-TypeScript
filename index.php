<?php
include("conexion.php"); // TODO: hacer que mediante un fetch se haga la conexion
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

			.table-responsive div {
				display: flex;
				justify-content: center;
			}
		</style>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" defer></script>
		<!-- <script src="js/bootstrap.min.js" defer></script> -->
		<script src="js/typescript/show-employess.js" defer></script>
		
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

						<!--<div 
						class="alert alert-danger alert-dismissable" 
						style="display:none;">
							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
						 	Error, no se pudo eliminar los datos.
						</div>-->
			<form class="form-inline">
				<div class="form-group">
					<select>
						<option>Filtros de datos de empleados</option>
						<option value="1">Fijo</option>
						<option value="2">Contratado</option>
                        <option value="3">Outsourcing</option>
					</select>
				</div>
			</form>
			<br />
			<div class="table-responsive">
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th scope="col">No</th>
							<th scope="col">Código</th>
							<th scope="col">Nombre</th>
							<th scope="col">birtplace</th>
							<th scope="col">birthday</th>
							<th scope="col">phone</th>
							<th scope="col">job</th>
							<th scope="col">Estado</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
				<div>
					<span>&copy; Sistemas Web <?php echo date("Y");?></span>
				</div>
			</div>
		</div>
	</div>


	
	<script type="text/javascript">
		

// 		$(document).ready(function() {
// 			$('.delete').on('click', function(e) {
// 				e.preventDefault();
// 				var item = $(this).attr('data');
// 				var dataString = 'id='+item;
				
// 				var element = this;
// 				//para eliminar la consulta en el doom y bds
// 				$.ajax({
// 					type: "POST",
// 					url: "delete.php",
//             data: dataString,
//             success: function(response) {

//                 $('.alert-success').empty();
//                 $('.alert-success').append(response).fadeIn("slow");
//                 $(element).closest("tr").fadeOut();
//             }
//         });
//     });
// });
</script>
</body>
</html>
