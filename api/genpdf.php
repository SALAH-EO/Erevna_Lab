<?php 


header('Content-type: application/pdf');
 header("Access-Control-Allow-Origin: *");



use Dompdf\Dompdf;
use Dompdf\Options;

require_once 'connect.php' ;
$database = new Operations();
$conn = $database->dbConnection();

 $num = isset($_GET['num']);



if ($num) {
	$num = filter_var($_GET['num'], FILTER_VALIDATE_INT, [
		'options' => [
				'default' => 'tous',
				'min_range' => 1	]]);
}

$sql = "SELECT * FROM `demande` WHERE num='$num' " ;
	$stmt = $conn->prepare($sql);
	$stmt->execute();

	$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

	ob_start();


	require_once 'content.php';


	$html = ob_get_contents();

	ob_end_clean();

 require_once './dompdf/autoload.inc.php' ;


 $options = new Options();
 $options->set('defaultFont' , 'Courier') ;



 $dompdf = new Dompdf($options);

 $dompdf->loadHtml($html);

 $dompdf->setPaper('A4', 'portrait') ;

 $dompdf->render();

//$dompdf->stream();

//$dompdf->stream('./PDFs/my.pdf',array('Attachment'=>0));

$output = $dompdf->output();
file_put_contents('C:/Users/Dell/Desktop/project_versions/PfeLAB2/PfeLAB/src/assets/PDFs/filename.pdf', $output);


 ?>