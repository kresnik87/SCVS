<?php

class MTablaConv extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_tabla($limit, $start) {

        $this->db->select('*');
        $this->db->from('tabla_conversion');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }

    public function add_tabla($datos) {
        $query = $this->db->insert('tabla_conversion', $datos);
    }

    public function update_tabla($id, $datos) {
        $this->db->where('id_conv', $id);
        $query = $this->db->update('tabla_conversion', $datos);
    }

    public function delete_tabla($id) {
        $this->db->where('id_conv', $id);
        $query = $this->db->delete('tabla_conversion');
    }

    public function get_tabla($id) {
        $this->db->where('id_conv', $id);
        $query = $this->db->get('tabla_conversion');
        return $query->result();
    }

    public function get_tabla_by_um($um1, $um2) {
        $this->db->where('um1', $um1);
        $this->db->where('um2', $um2);
        $query = $this->db->get('tabla_conversion');
        return $query->result();
    }

}