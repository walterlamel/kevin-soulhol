<?php


header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Credentials: true");

header('Content-Type: application/json; charset=utf-8');

header("Access-Control-Allow-Origin: *");

if (isset($_POST['repertory']) && $_POST['repertory'] !== 'null' && $_POST['repertory']) {
    $url = '../imgs/' . $_POST['repertory'];

    $images = preg_grep('~\.(jpeg|jpg|png)$~', scandir($url));
    $files = array();

    foreach ($images as $image) {
        if ($image !== "." && $image !== "..") {
            $path = '/imgs/' . $_POST['repertory'] . "/" . $image;
            array_push($files, $path);
        }
    }

    echo json_encode($files);
    return;
}

echo json_encode([]);
