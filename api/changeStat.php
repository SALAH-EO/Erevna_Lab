<?php 



     header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Methods: GET,PUT");
   header("Access-Control-Allow-Headers: access");
   header("Access-Control-Allow-Credentials: true");
 
require './connect.php';

$database = new Operations();
$conn = $database->dbConnection();


 $num = isset($_GET['num']);

 $statut = $_GET['stat'];




if ($num) {
	$num = filter_var($_GET['num'], FILTER_VALIDATE_INT, [
		'options' => [
				'default' => 'tous',
				'min_range' => 1	]]);
}



try {
	$sql = /* is_numeric($client_id) ? */ "UPDATE `demande` SET statut='$statut' WHERE num='$num' " ;
	$stmt = $conn->prepare($sql);
	$stmt->execute();

	
	
} catch (PDOException $e){
	http_response_code(500);
	echo json_encode([
		'success' => 0,
		'message' => $e->getMessage()
	]);
	exit ;
}

 ?>

 