<?php

class CLogin extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('MUsuarios');
        $this->load->model('MPerfil');
        $this->load->library('encrypt');
    }

    public function index() {

        $this->load->view('login/index');
    }

    public function ext_login() {
        $name = $_POST['username'];
        $passw = sha1($_POST['password']);
        $data = $this->MUsuarios->ValidarUsuario($name, $passw);
        if (isset($data[0]->uid)) {
            $usuario = $name;
            $newdata = array(
                'uid' => $data[0]->uid,
                'user' => $data[0]->username,
                'rol' => $data[0]->rol
                    //'logged_in' => TRUE
            );
            $this->session->set_userdata($newdata);
            $this->output->set_output(json_encode(array(
                'status' => 'success',
                'user' => $name)
            ));
			
        } else {
            $this->output->set_output(json_encode(array(
                'status' => 'failure')
            
            ));
            /* echo json_encode(array(
                "success" => false,
                "msg" =>  "Usuario o password incorrecto" 
            ));*/
        }
    }

    function ext_register() {
        $name = $_POST['username'];
        $pass = $_POST['password'];
        $licencia = $_POST['licencia'];
        $lic = $this->encrypt->decode($licencia);
        if ($lic == sha1(APPNAME)) {
            $existe=$this->MUsuarios-> ComprobarUsuario($name);
            if(!$existe){
            $id_user = $this->MUsuarios->insert_user($name, $pass, 3, $licencia);
            $this->MPerfil->insert_perfil($id_user);
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Usuario Agregado Correctamente" : mysql_error(),
                "data" => array(
                    array(
                        "id" => mysql_insert_id()
                    )
                )
            ));}else{
                 echo json_encode(array(
                "success" => false,
                "msg" =>  "Nombre de usuario existente" 
            ));
            }
        } else {
             echo json_encode(array(
                "success" => false,
                "msg" =>  "Licencia no válida" 
            ));
        }
    }

    function ext_get_logged() {
        $user = $this->session->userdata('user');
        $rol = $this->session->userdata('rol');

        $this->output->set_output(json_encode(array(
            'success' => true,
            'user' => $user,
            'rol' => $rol,
                        )
        ));
    }

    function ext_logout() {
        $user = $this->session->userdata('user');
        $this->session->sess_destroy();
        $this->output->set_output(json_encode(array(
            'status' => 'success',
            'user' => $user
                        )
        ));
    }

}
