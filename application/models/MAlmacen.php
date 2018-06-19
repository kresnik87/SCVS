<?php class MAlmacen extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
  public function listar_Almacen()
  {
	$this->db->select('*');
	$this->db->from('almacen');
	$query=$this->db->get();
        return $query;
  }
 
 public function add_Almacen($datos)
 {
	$query = $this->db->insert('almacen', $datos);
 }
 
 public function update_almacen($id, $datos)
 {
	$this->db->where('id_alm', $id);
    $query = $this->db->update('almacen', $datos);

 }
 public function delete_almacen($id)
 {
	$this->db->where('id_alm', $id);
    $query = $this->db->delete('almacen');

 }
 public function search_Almacen($nombre){
 $this->db->where('nomb_alm',$nombre);
 $query=$this->db->get('almacen');
 return $query->result();
 }
 
 public function get_nomb_alm($id_alm){
 $this->db->where('id_alm',$id_alm);
 $query=$this->db->get('almacen');
 return $query->result();
 }

         
}