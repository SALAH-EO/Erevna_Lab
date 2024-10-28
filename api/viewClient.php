<?php 

   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Methods: GET");
   header("Access-Control-Allow-Headers: access");
   header("Access-Control-Allow-Credentials: true");

   if($_SERVER['REQUEST_METHOD'] !== 'GET') :
   	   	http_response_code(405);
   	   	echo json_encode([
   	   		'success' => 0,
   	   		'message' => 'Bad Request Detected! Only get method is allowed',]);
   	   	exit ;
   	endif;

require 'connect.php';
$database = new Operations();
$conn = $database->dbConnection();

/* $client_id = isset($_GET['id']);


if ($client_id) {
	$client_id = filter_var($_GET['id'], FILTER_VALIDATE_INT, [
		'options' => [
				'default' => 'tous',
				'min_range' => 1	]]);
}
*/
$client_email = null;
$client_email = $_GET["email"] ;


try {
	$sql = /* is_numeric($client_id) ? */ "SELECT * FROM `client` WHERE email='$client_email'"  ;
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	if($stmt->rowCount() > 0) : 
		$data = null ;
		
			$data = $stmt->fetch(PDO::FETCH_ASSOC);
		 

		echo json_encode([
			'success' => 1,
			'data' => $data,]);

	else : 
		echo json_encode([
			'success' => 0,
			'message' => 'No Record Found!',]);
	endif;
	
} catch (PDOException $e){
	http_response_code(500);
	echo json_encode([
		'success' => 0,
		'message' => $e->getMessage()
	]);
	exit ;
}

 ?>