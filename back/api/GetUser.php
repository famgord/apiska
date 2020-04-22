<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$users = array();
$users = $users["users"] = range(1000, 3000, 350);

http_response_code(200);
echo json_encode($users);

