<?php 
include_once("db_connect.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);

	$actes = $request->acte;


	$str = serialize(json_decode(json_encode($actes), true));

	// unserialization $data =  json_decode(json_encode(unserialize($str)));

	







	$idClient = trim($request->idClient);
	$code_v = trim($request->code_v);
	$nom = trim($request->nom);
	$TypeDem = $request->TypeDem;
	$Lab = $request->Lab;
	$NbreEch = trim($request->NbreEch);
	$repetitions = trim($request->repetitions);
	$Nech = trim($request->Nech);
	$molecule = trim($request->molecule);
	$toxicite = trim($request->toxicite);
	$conditions = trim($request->conditions);
	$recuperation = trim($request->recuperation);
	$acte = $str ;
	$Montant = trim($request->Montant);


	$sql = "INSERT INTO demande(
		idClient,
		code_v,
		nom,
		TypeDem,
		Lab,
		NbreEch,	
		repetitions,
		Nech,
		molecule,
		toxicite,
		conditions,
		recuperation,
		acte,
Montant) VALUES ('$idClient','$code_v','$nom','$TypeDem','$Lab' , '$NbreEch' , '$repetitions' , '$Nech' , '$molecule' , '$toxicite' , '$conditions' , '$recuperation' , '$acte' , '$Montant')";

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