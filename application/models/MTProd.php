<?php

class MTProd extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_tipo_prod($limit, $start) {

        
        $query = $this->db->get('tipo_producto');
        return $query;
    }

    public function add_tipo_prod($datos) {
        $query = $this->db->insert('tipo_producto', $datos);
        return $this->db->insert_id();
    }
    
    public function update_tipo_prod($id_tipo, $datos) {
        $this->db->where('id_tipo_prod', $id_tipo);
        $query = $this->db->update('tipo_producto', $datos);
    }

    public function delete_tipo_prod($id_tipo) {
        $this->db->where('id_tipo_prod', $id_tipo);
        $query = $this->db->delete('tipo_producto');
    }

   

}