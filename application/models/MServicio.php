<?php class MServicio extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
  public function listarServicio()
  {
	$this->db->select('*');
        $this->db->from('servicio');
        $this->db->join('tipo_costo', 'servicio.id_tipo_costo= tipo_costo.id_tipo_costo');
        $query = $this->db->get();
        return $query;
  }
  
   public function listar_reg_serv($limit, $start) {
        $this->db->select('*');
        $this->db->from('registro_servicio');
        $this->db->join('area_venta', 'area_venta.id_area= registro_servicio.id_area');
        $this->db->join('servicio', 'servicio.id_serv= registro_servicio.id_serv');        
        $this->db->join('perfil', 'perfil.uid=registro_servicio.uid');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
  
  public function filtro($datos, $limit, $start) {

        if (!empty($datos['nomb_servicio'])) {
            $this->db->like('nomb_servicio', $datos['nomb_servicio'], 'both');
        }

        if (!empty($datos['id_serv'])) {
            $this->db->where('registro_servicio.id_serv', $datos['id_serv']);
        }
        if (!empty($datos['precio'])) {
            $this->db->where('precio', $datos['precio']);
        }
        if (!empty($datos['venta_inicial'])) {
            $this->db->where('registro_servicio.precio >=', $datos['venta_inicial']);
        }
        if (!empty($datos['venta_final'])) {
            $this->db->where('registro_servicio.precio <=', $datos['venta_final']);
        }
        if (!empty($datos['fecha_inicial'])) {
            $this->db->where('registro_servicio.fecha >=', $datos['fecha_inicial']);
        }
         if (!empty($datos['fecha_final'])) {
            $this->db->where('registro_servicio.fecha <=', $datos['fecha_final']);
        }
         if (!empty($datos['id_area'])) {
            $this->db->where('registro_servicio.id_area', $datos['id_area']);
        }
        $this->db->select('*');
       $this->db->from('registro_servicio');
        $this->db->join('area_venta', 'area_venta.id_area= registro_servicio.id_area');
        $this->db->join('servicio', 'servicio.id_serv= registro_servicio.id_serv');
        $this->db->join('perfil', 'perfil.uid=registro_servicio.uid');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }

  public function listar_tipo_costo()
  {
	$query = $this->db->get('tipo_costo');
    return $query;
  }
 
 public function add_servicio($datos)
 {
	$query = $this->db->insert('servicio', $datos);
 }
 
 public function update($id, $datos)
 {
    $this->db->where('id_serv', $id);
    $query = $this->db->update('servicio', $datos);

 }
 public function delete($id)
 {
    $this->db->where('id_serv', $id);
    $query = $this->db->delete('servicio');

 }
 
 public function delete_reg_serv($id)
 {
    $this->db->where('id_reg_serv', $id);
    $query = $this->db->delete('registro_servicio');

 }
 public function search_servicio($nombre){
 $this->db->where('nomb_servicio',$nombre);
 $query=$this->db->get('servicio');
 return $query->result();
 }
 
 
    public function add_reg_serv($datos) {
        $query = $this->db->insert('registro_servicio', $datos);
       
    }
	
    public function get_precio_serv_id($id_serv) {
        $this->db->select('p_venta');
        $this->db->from('servicio');
        $this->db->where('id_serv', $id_serv);
        $query = $this->db->get();
        return $query->result();
    }
	
    public function get_serv_fecha($id_serv,$id_area,$precio,$fecha) {
        $this->db->select('*');
        $this->db->from('registro_servicio');
        $this->db->join('area_venta', 'area_venta.id_area = registro_servicio.id_area');
        $this->db->where('registro_servicio.id_serv', $id_serv);
        $this->db->where('registro_servicio.id_area', $id_area);
        $this->db->where('registro_servicio.precio', $precio);
		$this->db->where('registro_servicio.fecha', $fecha);
		$query = $this->db->get();
        return $query->result();
    }
	
	
 public function update_reg_servicio($id, $datos)
 {
    $this->db->where('id_reg_serv', $id);
    $query = $this->db->update('registro_servicio', $datos);

 }
  public function get_importe_serv() {

        $this->db->select('importe');
        $this->db->from('registro_servicio');
        $query = $this->db->get();
        return $query;
    }
  public function fix_bd_null_data() {
		$null=null;
        $this->db->where('id_serv', $null);
        $query = $this->db->delete('registro_servicio');
    }
	public function get_utilidad_anual($anno) {
		$this->db->select('SUM(importe) AS utilidad');
        $this->db->where('year(fecha)>=', $anno);
		$this->db->from('registro_servicio');
		$query = $this->db->get();
        return $query->row();
    }
	public function get_utilidad_mensual($mes) {
		$this->db->select('SUM(importe) AS utilidad');
        $this->db->where('month(fecha)', $mes);
		$this->db->from('registro_servicio');
		$query = $this->db->get();
        return $query->row();
    }
	public function get_utilidad_diaria($fecha_actual) {
		$this->db->select('SUM(importe) AS utilidad');
        $this->db->where('fecha ', $fecha_actual);
		$this->db->from('registro_servicio');
		
		$query = $this->db->get();
        return $query->row();
    }
	
}