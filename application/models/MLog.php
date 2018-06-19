<?php class MLog extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
  public function listar_log_alm()
  {
	$query = $this->db->get('log_alm');
    return $query;
  }
 
 public function add_log_alm($datos)
 {
	$query = $this->db->insert('log_alm', $datos);
 }
 public function add_log_existencia_alm($datos)
 {
    $query = $this->db->insert('registro_existencia_alm', $datos);
 }
 public function add_log_existencia_area($datos)
 {
    $query = $this->db->insert('registro_existencia_area', $datos);
 }
 public function add_log_mb($datos)
 {
	$query = $this->db->insert('log_inv_mbasicos', $datos);
 }
 public function add_log_area($datos)
 {
	$query = $this->db->insert('log_area', $datos);
 }
 public function update_log($id, $datos)
 {
	$this->db->where('id_log', $id);
    $query = $this->db->update('log_mov', $datos);

 }
 public function delete_log($id)
 {
	$this->db->where('id_log', $id);
    $query = $this->db->delete('log_mov');

 }
   public function delete_by_prod($prod,$alm) {
        $this->db->where('id_prod', $prod);
        $this->db->where('id_alm', $alm);
        $query = $this->db->delete('log_alm');
    }
     public function delete_by_prod_mb($prod,$alm) {
        $this->db->where('id_prod', $prod);
        $this->db->where('id_alm', $alm);
        $query = $this->db->delete('log_inv_mbasicos');
    }
public function delete_log_area_by_prod($prod,$area) {
        $this->db->where('id_prod', $prod);
        $this->db->where('id_area', $area);
        $query = $this->db->delete('log_area');
    }
 public function fix_bd_null_data_alm() {
		$null=null;
        $this->db->where('id_prod', $null);
        $query = $this->db->delete('log_alm');
    }
public function fix_bd_null_data_area() {
		$null=null;
        $this->db->where('id_prod', $null);
        $query = $this->db->delete('log_area');
    }	
}