<?php

$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "http://localhost:3000" || $http_origin == "https://www.kevin-soulhol.fr" || $http_origin == "https://www.kevin-soulhol.fr") {
    header("Access-Control-Allow-Origin: $http_origin");
}


header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: Content-Type, x-requested-with");

header("Access-Control-Allow-Credentials: true");

header('Content-Type: application/json; charset=utf-8');


if (!isset($_REQUEST['token'])) {
    r(false, "Pas de token", false, true);
}


$token = base64_decode($_REQUEST['token']);
if ($token !== 'nImbu52000') {
    r(false, "Token incorrect", false, true);
}
