<?php
 defined('BASEPATH') OR exit('No direct script access allowed');
 
 class Bookmark_model extends CI_Model{
     public function __construct() {
         parent::__construct();
         $this->load->databse();
     }
     public function match(){
         $array = array('username' => $username,'password' => $password);
         $query = $this->db->get_where($array);
         return $query->result();
     }
 }