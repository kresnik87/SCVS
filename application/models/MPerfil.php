<?php

class MPerfil extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }
    public function listar_perfil()
    {
	$query = $this->db->get('perfil');
    return $query;
    }
    function insert_perfil($uid) {
        $datos = array(
            'uid' => $uid,
            'nombre' => "",
            'apellidos' => "",
            'foto' => "",
            'telefono' => "",
            'direccion' => "",
             'sexo' => "",
             'edad' => "",
             'fecha_nac' => ""
            
        );
        $this->db->insert('perfil', $datos);
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

    function delete_perfil($id) {
        $this->db->where('uid', $id);
        $query = $this->db->delete('perfil');
        return $query;
    }

    function get_user() {
        $this->db->select('id_user, nombre, password');
        $query = $this->db->get('usuarios');

        return $query;
    }

}

?>