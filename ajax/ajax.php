<?php
$json_string = file_get_contents("studentlist.json");
$data = json_decode($json_string,true);
// unset($data["E123456789"]);//delete
// $data["newid"]="new";//add

$action = $_GET["action"];
switch ($action) {
	case "listall":
		echo json_encode($data);		
		break;

	case "search":
		$ID = $_GET["search_id"];
		echo $data[$ID];
		break;

	case "add":
		$ID = $_GET["add_id"];
		$name = $_GET["add_name"];
		$data[$ID] = $name;
		break;

	case "delete":
		$ID = $_GET["del_id"];
		unset($data[$ID]);
		break;

	default:
		
		break;
}

$json = json_encode($data);
file_put_contents("studentlist.json",$json);


// $id = $_GET["fname"];
// $lname = $_GET["lname"];
// sleep(2); # pretend to spend some processing time
// echo "Hello, {$fname} {$lname}"; # no <h1> tag in comparison with get/post version
?>
