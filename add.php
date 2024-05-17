<?php
include("conexion.php");
?>
<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Latihan MySQLi</title>

	<!-- Bootstrap -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-datepicker.css" rel="stylesheet">
	<link href="css/style_nav.css" rel="stylesheet">
	<style>
		.content {
			margin-top: 80px;
		}
	</style>


<body>
	<nav class="navbar navbar-default navbar-fixed-top">
		<?php include("nav.php");?>
	</nav>
	<div class="container">
		<div class="content">
			<h2>Datos del empleados &raquo; Agregar datos</h2>
			<hr />

			<?php
					session_start();
					if(isset($_SESSION['message'])){
							?>
							<div class="alert alert-info text-center" style="margin-top:20px;">
									<?php echo $_SESSION['message']; ?>
							</div>
							<?php

							unset($_SESSION['message']);
					}
			?>

			<form class="form-horizontal" action="addInfoXml.php" method="post">
				<div class="form-group">
					<label class="col-sm-3 control-label">firstname</label>
					<div class="col-sm-4">
						<input type="text" name="firstname" class="form-control" placeholder="Nombres" required>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">lastname</label>
					<div class="col-sm-4">
						<input type="text" name="lastname" class="form-control" placeholder="Nombres" required>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">birtplace</label>
					<div class="col-sm-4">
						<input type="text" name="birtplace" class="form-control" placeholder="Lugar de nacimiento" required>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">birthday</label>
					<div class="col-sm-4">
						<input type="text" name="birthday" class="input-group date form-control" date="" data-date-format="dd-mm-yyyy" placeholder="00-00-0000" required>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">address</label>
					<div class="col-sm-3">
						<textarea name="address" class="form-control" placeholder="Dirección"></textarea>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">phone</label>
					<div class="col-sm-3">
						<input type="text" name="phone" class="form-control" placeholder="Teléfono" required>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">job</label>
					<div class="col-sm-3">
						<input type="text" name="job" class="form-control" placeholder="Puesto" required>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-3 control-label">state</label>
					<div class="col-sm-3">
						<select name="state" class="form-control">
							<option value=""> ----- </option>
                           <option value="1">Fijo</option>
							<option value="2">Contratado</option>

							 <option value="3">Outsourcing</option>
						</select>
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-3 control-label">&nbsp;</label>
					<div class="col-sm-6">
						<input type="submit" name="add" class="btn btn-sm btn-primary" value="Guardar datos">
						<a href="index.php" class="btn btn-sm btn-danger">Cancelar</a>
					</div>
				</div>
			</form>
		</div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/bootstrap-datepicker.js"></script>
	<script>
	$('.date').datepicker({
		format: 'dd-mm-yyyy',
	})
	</script>
</body>
</html>
