<?php

class MArea extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_area($limit, $start) {
        $query = $this->db->get('area_venta');
        return $query;
    }

    public function add_area($datos) {
        $query = $this->db->insert('area_venta', $datos);
    }

    public function update_area($id, $datos) {
        $this->db->where('id_area', $id);
        $query = $this->db->update('area_venta', $datos);
    }

    public function delete_area($id) {
        $this->db->where('id_area', $id);
        $query = $this->db->delete('area_venta');
    }

    

    public function search_area($nombre) {
        $this->db->where('nomb_area', $nombre);
        $query = $this->db->get('area_venta');
        return $query->result();
    }

}