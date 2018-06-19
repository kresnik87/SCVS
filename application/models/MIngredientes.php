<?php

class MIngredientes extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_ing($limit, $start) {

        $this->db->select('*');
        $this->db->from('compuesta');
        $this->db->join('ingredientes', 'ingredientes.id_ing= compuesta.id_ing');
        $this->db->join('producto', 'producto.id_prod= ingredientes.id_prod');
        $this->db->join('unidad_medida', 'unidad_medida.id_um= ingredientes.id_um');
        $this->db->join('norma', 'norma.id_norma= compuesta.id_norma');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }

    public function add_ing($datos) {
        $query = $this->db->insert('ingredientes', $datos);
        return $this->db->insert_id();
    }

    public function add_comp($datos) {
        $query = $this->db->insert('compuesta', $datos);
    }

    public function update_ing($id, $datos) {
        $this->db->where('id_ing', $id);
        $query = $this->db->update('ingredientes', $datos);
    }

    public function update_comp($id_ing, $id_norm, $datos) {
        $this->db->where('id_ing', $id_ing);
        $this->db->where('id_norma', $id_norm);
        $query = $this->db->update('compuesta', $datos);
    }

    public function delete_ing($id_ing) {
        $this->db->where('id_ing', $id_ing);
        $query = $this->db->delete('ingredientes');
    }

    public function delete_comp($id_ing,$id_norma) {
        $this->db->where('id_ing', $id_ing);
        $this->db->where('id_norma', $id_norma);
        $query = $this->db->delete('compuesta');
    }

}