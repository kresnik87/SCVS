<?php

class MVenta extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_reg_venta($limit, $start) {
        $this->db->select('*');
        $this->db->from('registro_ventas');
        $this->db->join('area_venta', 'area_venta.id_area= registro_ventas.id_area');
        $this->db->join('producto', 'producto.id_prod= registro_ventas.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('perfil', 'perfil.uid=registro_ventas.uid');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
    public function filtro($datos, $limit, $start) {

        if (!empty($datos['nomb_prod'])) {
            $this->db->like('nomb_prod', $datos['nomb_prod'], 'both');
        }
        if (!empty($datos['id_tipo'])) {
            $this->db->where('id_tipo_prod', $datos['id_tipo']);
        }
       
        if (!empty($datos['p_venta'])) {
            $this->db->where('p_venta', $datos['p_venta']);
        }
       
        if (!empty($datos['marca'])) {
            $this->db->like('marca', $datos['marca']);
        }
        if (!empty($datos['descripcion'])) {
            $this->db->like('descripcion', $datos['descripcion'],'both');
        }
        if (!empty($datos['venta_inicial'])) {
            $this->db->where('registro_ventas.p_venta >=', $datos['venta_inicial']);
        }
        if (!empty($datos['venta_final'])) {
            $this->db->where('registro_ventas.p_venta <=', $datos['venta_final']);
        }
        if (!empty($datos['fecha_inicial'])) {
            $this->db->where('registro_ventas.fecha >=', $datos['fecha_inicial']);
        }
         if (!empty($datos['fecha_final'])) {
            $this->db->where('registro_ventas.fecha <=', $datos['fecha_final']);
        }
         if (!empty($datos['id_area'])) {
            $this->db->where('registro_ventas.id_area', $datos['id_area']);
        }
        $this->db->select('*');
       $this->db->from('registro_ventas');
        $this->db->join('area_venta', 'area_venta.id_area= registro_ventas.id_area');
        $this->db->join('producto', 'producto.id_prod= registro_ventas.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('perfil', 'perfil.uid=registro_ventas.uid');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }

    public function add_reg_venta($datos) {
        $query = $this->db->insert('registro_ventas', $datos);
       
    }
      public function add_vale_venta($datos) {
        $query = $this->db->insert('vale_venta', $datos);
       
    }



    public function delete_reg_venta($id) {
        $this->db->where('id_reg', $id);
        $query = $this->db->delete('registro_ventas');
    }

   
    public function get_prod_mas_vend_top_five(){
        $this->db->select('COUNT(registro_ventas.cant) AS Total');
        $this->db->select('registro_ventas.id_prod');
        $this->db->select('producto.nomb_prod');
        $this->db->select('tipo_producto.tipo_prod');
        $this->db->from('registro_ventas');
        $this->db->join('producto', 'producto.id_prod= registro_ventas.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('tipo_producto', 'tipo_producto.id_tipo_prod = venta_directa.id_tipo_prod');
        $this->db->group_by('registro_ventas.id_prod');
        $this->db->order_by('Total','DESC');
        $this->db->limit(5, 0);
        $query = $this->db->get();
        return $query->result();
    }

    public function get_cant_prod_vend_id($id_prod) {
         $this->db->select('cant');
        $this->db->where('id_prod', $id_prod);
       $this->db->from('registro_ventas');
        $query = $this->db->get();
        return $query->row();
    }
	 public function get_importe_venta() {

        $this->db->select('importe');
        $this->db->from('registro_ventas');
        $query = $this->db->get();
        return $query;
    }
	public function get_importe_venta_cant() {

        $this->db->select('importe');
        $this->db->from('reg_vent_cant');
        $query = $this->db->get();
        return $query;
    }
	
	 public function fix_id_user_null_reg_venta($datos) {
		 $null=null;

        $this->db->where('uid', $null);
        $query = $this->db->update('registro_ventas', $datos);
    }
	 public function fix_id_user_null_reg_venta_cant($datos) {
		 $null=null;

        $this->db->where('uid', $null);
        $query = $this->db->update('reg_vent_cant', $datos);
    }
    
	
	
	public function get_utilidad_vent_cant_diaria($fecha_actual) {
		$this->db->select('SUM(utilidad) AS utilidad');
        $this->db->where('fecha ', $fecha_actual);
		$this->db->from('reg_vent_cant');
		$query = $this->db->get();
        return $query->row();
    }
	
	public function get_utilidad_vent_diaria($fecha_actual) {
		$this->db->select('SUM(utilidad) AS utilidad');
        $this->db->where('fecha ', $fecha_actual);
		$this->db->from('registro_ventas');
		$query = $this->db->get();
        return $query->row();
    }
	public function get_utilidad_vent_cant_anual($anno) {
		$this->db->select('SUM(utilidad) AS utilidad');
        $this->db->where('year(fecha)<=', $anno);
		$this->db->from('reg_vent_cant');
		$query = $this->db->get();
        return $query->row();
    }
	
	public function get_utilidad_vent_anual($anno) {
		$this->db->select('SUM(utilidad) AS utilidad');
        $this->db->where('year(fecha)<=', $anno);
		$this->db->from('registro_ventas');
		$query = $this->db->get();
        return $query->row();
    }
	public function get_utilidad_vent_mensual($mes) {
		$this->db->select('SUM(utilidad) AS utilidad');
        $this->db->where('month(fecha)', $mes);
		$this->db->from('registro_ventas');
		$query = $this->db->get();
        return $query->row();
    }
	public function get_utilidad_vent_cant_mensual($mes) {
		$this->db->select('SUM(utilidad) AS utilidad');
        $this->db->where('month(fecha)', $mes);
		$this->db->from('reg_vent_cant');
		$query = $this->db->get();
        return $query->row();
    }
	 public function update_reg_venta($datos,$id) {
		$this->db->where('id_reg', $id);	
        $query = $this->db->update('reg_vent_cant', $datos);
       
    }
	 public function update_reg($datos,$id) {
		$this->db->where('id_reg', $id);	
        $query = $this->db->update('registro_ventas', $datos);
       
    }
  
  
}