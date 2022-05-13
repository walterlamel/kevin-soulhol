<?php


/**
 * return les résultats à ma façon
 */
function r($res, $text = false, $details = false, $echo = false)
{
    $result = array(
        'res' => $res,
        'text' => $text
    );

    if ($details && is_array($details)) {
        foreach ($details as $key => $detail) {
            $result[$key] = $detail;
        }
    }

    if ($echo) {
        echo json_encode($result);
    } else {
        return $result;
    }

    if (!$res) {
        die();
    }
}


/**
 * Ecrit quelque chose dans le logger
 * @param string|array $e
 */
function logger($e)
{


    $name_file = 'logger.txt';
    $texte = file_get_contents($name_file);


    $date = new DateTime('now');
    $date = $date->format('Y-M-d-H-i-s');
    $new = $date . "\n";
    if (is_array($e) || is_object($e)) {
        $e = json_encode($e, JSON_PRETTY_PRINT);
    }
    $new = $new . $e;


    $texte = $texte . "\n \n" . $new;
    file_put_contents($name_file, $texte);
}
