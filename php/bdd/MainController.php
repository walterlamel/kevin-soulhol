<?php

namespace php\bdd;

use PDO;
use Exception;



class MainController
{

    //nom de la table
    public $table_name;

    //object PDO
    private $bdd;

    public function __construct($table_name, $bdd_name = false)
    {
        $this->table_name = $table_name;
        $this->connect_bdd($bdd_name);
    }

    /**
     * Récupère tout dans la table
     * @param string $orderby Trié par quelle colonne
     * @param int $limit Limite de résultat à retourner
     * @return array $result
     */
    public function getAll($orderby = false, $limit = false)
    {
        $query = 'SELECT * FROM ' . $this->table_name;

        $query = $this->addOptionsToQuery($query, $orderby, $limit);

        try {
            $result = $this->bdd->query($query)->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        } catch (Exception $e) {
            r(false, $e->getMessage());
        }
    }

    /**
     * Récupère infos selon args
     * @param array $args Nom des colonnes et valeur demandée
     * @return array resultat récup
     */
    public function getBy($args, $orderby = false, $limit = false)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE";

        $c = 0;
        foreach ($args as $col => $value) {
            $query = $query . ' ' . $col . '="' . $value . '"';

            if ($c < count($args) - 1) {
                $query = $query . " AND";
            }
            $c++;
        }

        $query = $this->addOptionsToQuery($query, $orderby, $limit);

        $r = $this->Query($query);

        return $r;
    }


    /**
     * Ajouter les order by et limit etc;
     * @return string $query avec l'ajout
     */
    public function addOptionsToQuery($query, $orderby = false, $limit = false)
    {
        if ($orderby) {
            if (is_array($orderby)) {
                $query = $query . ' ORDER BY ';
                $count = 0;
                foreach ($orderby as $col => $asc) {
                    $query = $query . $col . ' ' . $asc;
                    if ($count < count($orderby) - 1) {
                        $query = $query . ', ';
                    }
                    $count++;
                }
            } else {
                $query = $query . ' ORDER BY ' . $orderby;
            }
        }

        if ($limit) {
            $query = $query . " LIMIT " . $limit;
        }

        return $query;
    }


    /**
     * Ajoute un element à la table
     * @param array $infos nom de la colonne + value
     * @return false|int si ok retourne l'ID de l'élément ajouté
     */
    public function addItem($infos)
    {

        //on protège les élements
        foreach ($infos as $key => $info) {
            if (is_array($info)) {
                foreach ($info as $key2 => $i) {
                    $info[$key2] = $this->sanitize_infos($i);
                }
            } else {
                $infos[$key] = $this->sanitize_infos($info);
            }
        }



        $infos = $this->prepareItemtoAdd($infos);


        $query = "INSERT INTO " . $this->table_name . " (";

        $count = 0;
        foreach ($infos as $key => $value) {
            $query = $query . $key;

            if ($count < count($infos) - 1) {
                $query = $query . ', ';
            } else {
                $query = $query . ")";
            }
            $count++;
        }

        $query = $query . " VALUES(";
        $count = 0;
        foreach ($infos as $key => $value) {
            $query = $query . ":" . $key;

            if ($count < count($infos) - 1) {
                $query =  $query . ', ';
            } else {
                $query = $query . ")";
            }
            $count++;
        }

        $result = $this->bdd->prepare($query);
        foreach ($infos as $key => $value) {
            $result->bindValue($key, $value);
        }


        try {

            $result->execute();
            $id = $this->bdd->query('SELECT id FROM ' . $this->table_name . ' ORDER BY ID DESC LIMIT 1')->fetch(PDO::FETCH_ASSOC);
            return $id['id'];
        } catch (Exception $e) {
            logger($query);
            logger($e);
            logger('-------------------');
            r(false, $e);
        }
    }


    /**
     * Update un élément
     * @param int $id Id de l'élément à modif
     * @param array $infos Infos à modif (colonne + valeur)
     * @return bool|string si bool c'est bon, si c'est un stirng, c'est une erreur
     */
    public function updateItem($id, $infos)
    {
        $query = 'UPDATE ' . $this->table_name . ' SET ';

        $count = 0;
        foreach ($infos as $key => $info) {
            $query = $query . $key . "=:" . $key;

            if ($count < count($infos) - 1) {
                $query = $query . ",";
            }

            $count++;
        }

        $query = $query . " WHERE id=:id";

        $result = $this->bdd->prepare($query);
        $result->bindValue('id', $id);
        foreach ($infos as $key => $value) {
            $result->bindValue($key, $value);
        }

        try {
            $result->execute();
            return true;
        } catch (Exception $e) {
            return $e;
        }
    }


    /**
     * Delete element
     * @return bool
     */
    public function deleteItem($id)
    {
        $query = 'DELETE FROM ' . $this->table_name . ' WHERE id=' . $this->sanitize_infos($id);

        try {
            $result = $this->bdd->query($query);
            return true;
        } catch (Exception $e) {
            return r(false, $e->getMessage());
        }
    }

    /**
     * Verifie si element existe
     * @return bool
     */
    public function isExist($by, $value)
    {
        if (!$value) {
            return false;
        }

        $query = 'SELECT * FROM ' . $this->table_name . ' WHERE ' . $this->sanitize_infos($by) . '="' . $this->sanitize_infos($value) . '"';


        $result = $this->bdd->query($query)->fetch(PDO::FETCH_ASSOC);

        return $result ? true : false;
    }

    /**
     * Prépare et sécurise les informations avant d'ajouter un nouvel élément dans la bdd
     * @return array 
     */
    public function prepareItemtoAdd($infos)
    {
        return $infos;
    }


    public function Query($query)
    {
        try {
            $result = $this->bdd->query($query)->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        } catch (Exception $e) {
            logger($query);
            logger($e);
            return false;
            die('Erreur : ' . $e->getMessage());
        }
    }


    /**
     * Enleve les espaces et les special chars
     * @param array|string $str
     * @return array|string $str
     */
    public function sanitize_infos($str)
    {
        if (is_array($str)) {
            foreach ($str as $key => $value) {
                $str[$key] = $this->sanitize_infos($value);
            }
            $sanitize = $str;
        } else {
            $sanitize = trim($str);
            $sanitize = htmlspecialchars($sanitize);
        }


        return $sanitize;
    }


    /**
     * Connecter à la bdd, prêt aux requetes
     * @return bool
     */
    private function connect_bdd($bdd_name)
    {
        try {
            $this->bdd = new PDO('mysql:host=' . HOST . ';dbname=' . BDD_NAME . ';charset=utf8', USER, PASS, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            return true;
        } catch (Exception $e) {
            return false;
            die('Erreur : ' . $e->getMessage());
        }
    }
}
