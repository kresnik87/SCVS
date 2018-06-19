<?php class MUnidadB extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
  public function listar_UnidadB()
  {
	$query = $this->db->get('unidad');
    return $query;
  }
 
 public function add_UnidadB($datos)
 {
	$query = $this->db->insert('unidad', $datos);
 }
 
 public function update_UnidadB($id, $datos)
 {
	$this->db->where('id_unidad', $id);
    $query = $this->db->update('unidad', $datos);

 }
 public function delete_UnidadB($id)
 {
	$this->db->where('id_unidad', $id);
    $query = $this->db->delete('unidad');

 }
 public function search_UnidadB($nombre){
 $this->db->where('nomb_unid',$nombre);
 $query=$this->db->get('unidad');
 return $query->result();
 }
}