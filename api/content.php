<!DOCTYPE html>
<html lang="fr">
	<head>

		<style>
			.tableau1 th,tr,td{
				background-color: gray  ;
				border : black solid 2px ;
				border-collapse:collapse;
			}

			.tableau2 th,tr,td {
				background-color: lightblue  ;
				border : black solid 2px ;
				border-collapse:collapse;

			}
		</style>

		<meta charset="UTF-8" >
		<meta http-equiv="X-UA-Compatible" content="IE=edge" >
		<meta name="viewport" content="width=device-width , initial-scale=1.0 " >
			<title>PDF</title>
	</head>

	<body>
		
		<h1>Votre Demande</h1>
		<table class="tableau1">
			<thead>
				<th>NUM demande</th>
           		<th>N echantillons</th>
      			<th>Type Echantillons</th>
      			<th>Rendez vous</th>
      			<th>Domaine</th>
      			<th>Machine</th>
			</thead> 
			<tbody>
				<?php foreach($data as  $demande) : ?>
						<tr>
							<td> <?= $demande['num']  ?></td>
							<td><?= $demande['Nech']  ?></td>
							<td><?= $demande['Tech']  ?></td>
							<td><?= $demande['rdv']  ?></td>
							<td><?= $demande['domaine']  ?></td>
							<td><?= $demande['machine']  ?></td>
						</tr>
				<?php endforeach; ?>	
			</tbody>
		</table>

		<h1>Plan d'analyse</h1>

		<table class="tableau2">
			<thead>
				<th>Etape</th>
				<th>Operations</th>
			</thead>
			<tbody>
				<tr>
					<td>Reçoit Echantillons </td>
					<td>Date de deployement <br> Etiquitter</td>
				</tr>	
				<tr>
					<td>Envoi au lab concerné</td>
					<td>Debut d'analyse <br> ...</td>
				</tr>
			</tbody>
		</table>
	</body>


</html>