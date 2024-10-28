<?php 
include_once("db_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);

	$nom = trim($request->nom);
	$prenom = trim($request->prenom);
	$email = mysqli_real_escape_string($mysqli, trim($request->email));
	$domaine = $request->domaine;
	$password = mysqli_real_escape_string($mysqli, trim($request->password));
	$mobile = trim($request->mobile);
	$etablissement = trim($request->etablissement);
	$entity = $request->entity;
	$encadrant = trim($request->encadrant);
	$niveau = $request->niveau;
	$adresse = trim($request->adresse);

	$sql = "INSERT INTO client(
		nom,
		prenom,
		email,
		domaine,
		password,
		mobile,
		etablissement,
		entity,
		encadrant,
		niveau,
		adresse) VALUES ('$nom','$prenom','$email','$domaine','$password','$mobile','$etablissement','$entity' ,'$encadrant','$niveau','$adresse')";

	if ($mysqli->query($sql)) {
		$data = array('message'=>'success');
		echo json_encode($data);
	}
	else{
		$data=array('message'=>'failed');
		echo json_encode($data);
	}


}

 ?>