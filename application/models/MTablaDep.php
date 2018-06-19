<?php

class MTablaDep extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_tabla_dep($limit, $start) {

        $this->db->select('*');
        $this->db->from('tabla_depreciacion');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }

    public function add_tabla_dep($datos) {
        $query = $this->db->insert('tabla_depreciacion', $datos);
        return $this->db->insert_id();
    }

  
    public function update_tabla_dep($id, $datos) {
        $this->db->where('id_tabla', $id);
        $query = $this->db->update('tabla_depreciacion', $datos);
    }

    public function delete_tabla_dep($id) {
        $this->db->where('id_tabla', $id);
        $query = $this->db->delete('tabla_depreciacion');
    }
    
   
    

    public function search_concepto($nombre) {
        $this->db->where('concepto', $nombre);
        $query = $this->db->get('tabla_depreciacion');
        return $query->result();
    }
 
  
}