<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
    
    public function bookmarks(){
        $this->load->view("bookmarks");
    }
    
    public function login(){
        $this->load->view("login");
    }
    public function login_submit(){
        $this->load->model('user');
        $this->user->check_into_db();
        $this->load->view("logout");
        
    }
    
    public function registration(){
        $this->load->view("registration");
    }
    
    public function register_submit(){
        $this->load->model('user');
        $r=$this->user->insert_into_db();
        $data['x'] = $r;
        $this->load->view("logout",$data);
    }
    
}
?>