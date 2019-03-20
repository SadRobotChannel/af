<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model {

    public function __construct() {
        parent:: __construct();
        $this->load->database();
    }

    function insert_into_db() {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $data = array(
            'username' => $username,
            'email' => $email,
            'password' => $password
        );

        //$sql = $this->db->set($data)->get_compiled_insert('users');
        //echo $sql;
        $this->db->insert('users', $data);
        return $username;
        /* $r=$this->db->query("INSERT INTO users(username,email,password) VALUES('$username','$email','$password')");
          return $r; */
    }

    function check_into_db() {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $r = $this->db->query("SELECT email FROM users WHERE password='$password'");
        if ($email == $r) {
            
        } else {
            
        }
    }

}

?>