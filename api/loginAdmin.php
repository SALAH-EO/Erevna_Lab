<?php 
require_once("db_connect.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
	$id = mysqli_real_escape_string($mysqli, trim($request->id));
	$password = mysqli_real_escape_string($mysqli, trim($request->password));

	$sql = "SELECT * FROM admin where id='$id' and password='$password' " ;
	$result = mysqli_query($mysqli,$sql);

	$nums = mysqli_num_rows($result);

	if($nums>0){
		$data = array('message'=>'success','id'=>$id);
		echo json_encode($data);
	}
	else{
		$data= array('message'=>'failed');
		echo json_encode($data);


	}
}

 ?>