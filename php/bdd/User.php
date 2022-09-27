<?php

namespace php\bdd;

class User extends MainController
{
    public function __construct($bdd_name = false)
    {
        parent::__construct('alf_user', false);
    }


    /**
     * Prépare et sécurise les informations avant d'ajouter un nouvel élément dans la bdd
     */
    public function prepareItemtoAdd($infos, $update = false)
    {
        foreach ($infos as $key => $value) {
            $newvalue = $value;

            switch ($key) {

                case "id":
                    r(false, "L'ID ne peut être modifié", false, true);
                    break;


                case 'password':
                    if (strlen($value) < 5) {
                        r(false, "Le mot de passe doit contenir au moins 5 caractères.", false, true);
                        die();
                    }

                    $newvalue = $this->hashPass($value);
                    break;
                case 'email':
                    if ($this->emailExist($value)) {
                        r(false, "Un compte avec cet email existe déjà.", false, true);
                    }

                    if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                        r(false, "Cet email n'est pas valide", false, true);
                    }

                    break;
                case 'pseudo':
                    if ($this->pseudoExist($value)) {
                        r(false, "Un compte avec ce pseudo existe déjà.", false, true);
                    }
                    break;
            }


            $infos[$key] = $newvalue;
        }

        return $infos;
    }


    /**
     * Verifie si email existe
     * @return bool
     */
    public function emailExist($email)
    {
        if (!$email) {
            r(false, 'Email non indiqué');
        }


        $r = parent::getBy(array('email' => $email), false, 1);

        return $r;
    }

    /**
     * Verifie si pseudo existe
     * @return bool
     */
    public function pseudoExist($pseudo)
    {
        if (!$pseudo) {
            r(false, 'Identifiant non indiqué');
        }


        $r = parent::getBy(array('pseudo' => $pseudo), false, 1);

        return $r;
    }

    /**
     * compare les mdp 
     * @param string $entry Mdp entré dans le formulaire
     * @param string $compare Mdp dans la bdd
     * @return bool
     */
    public function verifyPass($entry, $compare)
    {

        if (!password_verify($entry, $compare)) {
            return false;
        }

        return true;
    }

    /**
     * Hash le password avant d'$etre mis dans la bdd
     * @return string hashé
     */
    private function hashPass($pass)
    {
        $hash = password_hash($pass,  PASSWORD_BCRYPT);
        return $hash;
    }
}
