<?php
session_start();


//functions utiles


require_once('./functions.php');

//Vérifie que l'authorisation pour accéder à l'API
require_once('./auth.php');

//tous les defines et details bdd
require_once('./config.php');


use php\includes\Session;
use php\bdd\User;



if (!isset($_POST['action']) || empty($_POST['action']) || $_POST['action'] === 'undefined') {
    r(false, "Fonction à réaliser non indiquée", false, true);
}


define("DOS", $_SERVER['DOCUMENT_ROOT'] . '/');
spl_autoload_register(function ($class_name) {
    $class_name = str_replace('\\', '/', $class_name);
    include_once(DOS . $class_name . '.php');
});



/**
 * Liste des actions possibles via AJAX
 */
switch ($_POST['action']) {
    default:
        r(false, "Demande non comprise.", false, true);
        break;

    case 'get_dossier_image':
        if (!isset($_POST['path'])) {
            r(false, "Aucun chemin indiqué", false, true);
        }

        $url_to_send = '/images/' . $_POST['path'] . '/presentation/';
        $url = '..' . $url_to_send;
        $scandir = scandir($url);
        $files = array();
        //Lister toutes images ayant les extensions jpg, jpeg, png, gif, bmp et tif
        foreach ($scandir as $fichier) {
            if (preg_match("#\.(jpg|jpeg|png|gif|bmp|tif)$#", strtolower($fichier))) {
                array_push($files, $url_to_send . $fichier);
            }
        }

        r(true, $files, false, true);

        break;

    case 'isConnect':
        $S = new Session();
        $r = $S->isConnect();
        r(true, $r, array('details' => 'Pas de session connectée'), true);
        break;

    case 'get_role':
        $S = new Session();
        if (!$S->isConnect()) {
            r(false, "Vous n'êtes pas connecté", false, true);
        }

        if ($_SESSION['role'] === null || empty($_SESSION['role']) || $_SESSION['role'] == '0' || !$_SESSION['role']) {
            $_SESSION['role'] = false;
        }

        r($_SESSION['role'], $_SESSION['role'], false, true);
        break;

    case 'get_meta':
        $S = new Session();
        $r = $S->getMeta();
        if ($r) {
            r(true, $r, false, true);
        }
        break;

    case 'login':
        if (!isset($_POST['identifiant'])) {
            r(false, "Aucun identifiant indiqué", false, true);
        }
        if (!isset($_POST['password'])) {
            r(false, "Aucun password indiqué", false, true);
        }

        $U = new User();
        $user = $U->pseudoExist($_POST['identifiant']);

        if (!$user) {
            $user = $U->emailExist($_POST['identifiant']);
        }

        if (!$user) {
            r(false, "Ce pseudo ou email n'existe pas", array('input' => 'identifiant'), true);
        }

        $res = $U->verifyPass($_POST['password'], $user[0]['password']);
        if (!$res) {
            r(false, "Le mot de passe ne correspond pas", array('input' => 'password'), true);
        }

        $S = new Session();
        $S->createSession($user[0]);

        r(true, $res, array('identifiant' => $user[0]['pseudo']), true);

        break;

    case 'deco':
        $S = new Session();
        if (!$S->isConnect()) {
            die();
        }

        $S->disconnect();

        r(true, "Deconnection", false, true);
        break;

    case 'get_projets':
        $S = new Session();
        if (!$S->isConnect()) {
            r(false, "Vous n'êtes pas connecté", false, true);
        }

        $files_ok = explode(';', $_SESSION['meta']['auth_dir']);

        $url = '../works/';
        $scandir = scandir($url);
        $files = array();


        foreach ($scandir as $fichier) {
            if ($fichier != '.' && $fichier != '..') {

                if (in_array($fichier, $files_ok) || $_SESSION['role'] == 1) {
                    $item = array(
                        'name' => $fichier,
                        'path' => $_SERVER['HTTP_ORIGIN'] . '/works/' . $fichier
                    );
                    array_push($files, $item);
                }
            }
        }

        r(true, $files, false, true);


        break;

    case 'add_compte':

        $S = new Session();
        if (!$S->isConnect() && $_SESSION['role'] != 1) {
            r(false, "Vous n'êtes pas connecté", false, true);
        }


        $U = new User();


        //$_POST['blocs'] = json_decode($_POST['blocs'], true);
        //$newvalue = json_encode($contain, JSON_UNESCAPED_UNICODE);

        $meta = json_decode($_POST['meta'], true);
        $meta2 = json_encode($meta, JSON_UNESCAPED_UNICODE);

        $r = $U->addItem(array('email' => $_POST['email'], 'pseudo' => $_POST['pseudo'], 'password' => $_POST['password'], "meta" => htmlspecialchars_decode($meta2)));
        if ($r) {
            r(true, "Compte ajouté", array('id' => $r), true);
        } else {
            r(false, "Un problème est survenu. Voir les logs", false, true);
        }

        break;

    case 'get_accounts':

        $S = new Session();
        if (!$S->isConnect() || $_SESSION['role'] != 1) {
            r(false, "Vous n'êtes pas connecté", false, true);
        }

        $U = new User();
        $r = $U->getAll();
        if ($r) {
            foreach ($r as $key => $account) {
                $r[$key]['meta'] = htmlspecialchars_decode($account['meta']);
                $r[$key]['meta'] = json_decode($r[$key]['meta'], true);
            }
            r(true, $r, false, true);
        } else {
            r(false, "Une erreur est survenue", false, true);
        }
        break;
}
