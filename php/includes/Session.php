<?php

namespace php\includes;

use php\bdd\User;

class Session
{
    //id du compte
    private $id;

    //clé privée pour le token
    private $key = "superSecretAgenKey";
    private $name_cookie = 'cookie_au_chocolat';


    public function getId()
    {
        if (!$this->isConnect()) {
            return false;
        } else {
            if (isset($_SESSION['id'])) {
                return $_SESSION['id'];
            } else {
                return $this->getIdFromToken();
            }
        }
    }

    public function getMeta()
    {
        if (!$this->isConnect()) {
            r(false, "Vous n'êtes pas connecté");
        }

        $U = new User();
        $r = $U->getBy(array('id' => $this->getId()), false, false);
        $r = $r[0];
        $r = htmlspecialchars_decode($r['meta']);
        $r = json_decode($r, true);

        return $r;
    }


    /**
     * Créer la session selon infos envoyée
     * @param array $infos_session
     * @return bool réussite ou non
     */
    public function createSession($infos_session)
    {

        if ($this->isConnect()) {
            r(false, "Une session est déjà connectée");
        }

        if (!isset($infos_session['id']) || empty($infos_session['id'])) {
            r(false, 'Id de session non indiquée pour enregistrer la nouvelle session');
        }

        $this->id = $infos_session['id'];

        foreach ($infos_session as $key => $value_info) {

            $_SESSION[$key] = htmlspecialchars_decode($value_info);
        }

        $_SESSION['meta'] = $this->getMeta();

        $this->createTokenConnect();

        return true;
    }


    /**
     * Verifie le form de connection selon les POST envoyé
     * @return array result
     */
    public function verifForm()
    {
        $U = new User();

        $r = $U->emailExist($_POST['email']);
        $r2 = $U->pseudoExist($_POST['pseudo']);

        if (!$r && !$r2) {
            r(false, "Cet email n'existe pas", false, true);
        } else {
            if ($r) {
                $r = $r[0];
            } else if ($r2) {
                $r = $r2[0];
            }

            if (!$U->verifyPass($_POST['password'], $r['password'])) {
                r(false, "Le mot de passe ne correspond pas", false, true);
            } else {
                return r(true, "Vous pouvez vous connecter", array("session" => $r));
            }
        }
    }

    /**
     * Verifie form et ajoute l'inscription
     * @return bool|int retourne false ou l'id du compte ajouté
     */
    public function inscription()
    {
        $U = new User();
        $r = $U->addItem(array('pseudo' => $_POST['pseudo'], 'email' => $_POST['email'], 'password' => $_POST['password']));
        if ($r) {
            return $r;
        } else {
            return false;
        }
    }


    /**
     * Verifier si utilisateur est connecté
     * Regarder $SESSION puis $COOKIE puis return false
     * @return bool
     */
    public function isConnect()
    {
        if (isset($_SESSION['id'])) {
            return true;
        } else if ($this->tokenConnectExist()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Deconnecter la session
     */
    public function disconnect()
    {
        setcookie($this->name_cookie, '', time() - 3600);

        session_destroy();
    }

    /**
     * Encrypte
     * @param array $arr
     * @return string
     */
    public function encrypt($arr)
    {
        $arr = serialize($arr);
        return openssl_encrypt($arr, "AES-128-ECB", $this->key);
    }

    public function decrypt($str)
    {
        $decrypted_chaine = openssl_decrypt($str, "AES-128-ECB", $this->key);
        return unserialize($decrypted_chaine);
    }


    /**
     * création token de session
     * @return string $encrypted_chaine cookie encrypt avec id
     */
    private function createTokenConnect()
    {
        if (!$this->isConnect()) {
            return false;
        }

        $cookie = array(
            'id' => $this->id,
        );

        $token = $this->encrypt($cookie);

        setcookie($this->name_cookie, $token, time() + (60 * 60 * 24 * 30));

        return $token;
    }


    /**
     * Vérifier si token session existe
     * @return bool
     */
    private function tokenConnectExist()
    {
        return isset($_COOKIE[$this->name_cookie]);
    }


    /**
     * Retourne l'id Session du cookie
     * @return string
     */
    private function getIdFromToken()
    {
        if ($this->tokenConnectExist()) {
            $cookie = $_COOKIE[$this->name_cookie];


            $decrypted_chaine = openssl_decrypt($cookie, "AES-128-ECB", $this->key);
            $decrypted_chaine = unserialize($decrypted_chaine);

            return $decrypted_chaine['id'];
        } else {
            return false;
        }
    }
}
