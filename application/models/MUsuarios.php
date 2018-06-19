<?php

class MUsuarios extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }
    public function listar_user()
    {
	$query = $this->db->get('usuarios');
    return $query;
    }
    function ValidarUsuario($user, $password) {                  
        $this->db->where('username', $user);       
        $this->db->where('password', $password);
        $query = $this->db->get('usuarios');
        return $query->result();                               
    }

    function ComprobarUsuario($user) {
        $this->db->where('username', $user);
        $query = $this->db->get('usuarios');
        return $query->result();
    }

    function get_name_user($id) {
        $this->db->where('id_user', $id);
        $this->db->select('username');
        $query = $this->db->get('usuarios');
        $row = $query->row();
        return $row->nombre;
    }
     function get_licencia_user($id) {
        $this->db->where('uid', $id);
        $this->db->select('licencia');
        $query = $this->db->get('usuarios');
        $row = $query->row();
        return $row->licencia;
    }


    function insert_user($user, $pass, $rol, $lic) {
        $datos = array(
            'username' => $user,
            'password' => sha1($pass),
            'rol' => $rol,
            'licencia' => $lic
        );
        $this->db->insert('usuarios', $datos);
        $query = $this->db->insert_id();
        return $query;
    }
    function add_user($datos) {
       
        $this->db->insert('usuarios', $datos);
        $query = $this->db->insert_id();
        return $query;
    }

    function update_user($id,$datos) {
       
        $this->db->where('uid', $id);
        $query = $this->db->update('usuarios', $datos);
        return $query;
    }
      function update_perfil($id,$datos) {
       
        $this->db->where('uid', $id);
        $query = $this->db->update('perfil', $datos);
        return $query;
    }

    function delete_user($id) {
        $this->db->where('uid', $id);
        $query = $this->db->delete('usuarios');
        return $query;
    }

    function get_user() {
        $this->db->select('id_user, nombre, password');
        $query = $this->db->get('usuarios');

        return $query;
    }

}

?>