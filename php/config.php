<?php


$whitelist = array('127.0.0.1', "::1");

if (!in_array($_SERVER['REMOTE_ADDR'], $whitelist)) {
    define('BDD_NAME', 'kevinsladmin');
    define('HOST', "kevinsladmin.mysql.db");
    define('USER', 'kevinsladmin');
    define('PASS', 'kWalter1893');
} else {
    define('BDD_NAME', 'alfred');
    define('HOST', 'localhost');
    define('USER', 'root');
    define('PASS', '');
}
