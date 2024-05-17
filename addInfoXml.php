<?php
	session_start();
	if(isset($_POST['add'])){

		 $id_temporal = -1;
		//open xml file
		$users = simplexml_load_file('files/members.xml');
		$user = $users->addChild('user');
		//$user->addChild('id', $_POST['id']);
		$user->addChild('id',$id_temporal);
		$user->addChild('firstname', $_POST['firstname']);
		$user->addChild('lastname', $_POST['lastname']);
		$user->addChild('birtplace', $_POST['birtplace']);
		$user->addChild('birthday', $_POST['birthday']);
		$user->addChild('address', $_POST['address']);
		$user->addChild('phone', $_POST['phone']);
		$user->addChild('job', $_POST['job']);
		$user->addChild('state', $_POST['state']);
		// Save to file
		// file_put_contents('files/members.xml', $users->asXML());
		// Prettify / Format XML and save
		$dom = new DomDocument();
		$dom->preserveWhiteSpace = false;
		$dom->formatOutput = true;
		$dom->loadXML($users->asXML());
		$dom->save('files/members.xml');
		// Prettify / Format XML and save


		header('location: bds_insert.php');
	}
	else{

		header('location: index.php');
	}

?>
