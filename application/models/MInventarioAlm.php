<?php

class MInventarioAlm extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_inventario_prod_venta($limit, $start) {

        $this->db->select('*');
		$this->db->select('inventario_alm.p_costo');
        $this->db->from('inventario_alm');
        $this->db->join('inv_prod_venta', 'inv_prod_venta.id_inv_alm= inventario_alm.id_inv_alm');
        $this->db->join('almacen', 'almacen.id_alm = inventario_alm.id_alm');
        $this->db->join('producto', 'producto.id_prod = inventario_alm.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('estado_prod', 'estado_prod.id_estado = inventario_alm.id_estado');
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
         if (!empty($datos['id_alm'])) {
            $this->db->where('inventario_alm.id_alm', $datos['id_alm']);
        }
        if (!empty($datos['p_costo'])) {
            $this->db->where('inventario_alm.p_costo', $datos['p_costo']);
        }
       
        if (!empty($datos['marca'])) {
            $this->db->like('marca', $datos['marca']);
        }
        if (!empty($datos['descripcion'])) {
            $this->db->like('descripcion', $datos['descripcion'],'both');
        }
         if (!empty($datos['costo_inicial'])) {
            $this->db->where('inventario_alm.p_costo >=', $datos['costo_inicial']);
        }
         if (!empty($datos['costo_final'])) {
            $this->db->where('inventario_alm.p_costo <=', $datos['costo_final']);
        }
        $this->db->select('*');
		$this->db->select('inventario_alm.p_costo');
        $this->db->from('inventario_alm');
        $this->db->join('inv_prod_venta', 'inv_prod_venta.id_inv_alm= inventario_alm.id_inv_alm');
        $this->db->join('almacen', 'almacen.id_alm = inventario_alm.id_alm');
        $this->db->join('producto', 'producto.id_prod = inventario_alm.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('estado_prod', 'estado_prod.id_estado = inventario_alm.id_estado');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }

    public function search_inv_prod_venta($limit, $start,$alm,$prod) {

        $this->db->select('*');
        $this->db->from('inventario_alm');
        $this->db->join('inv_prod_venta', 'inv_prod_venta.id_inv_alm= inventario_alm.id_inv_alm');
        $this->db->join('almacen', 'almacen.id_alm = inventario_alm.id_alm');
        $this->db->join('producto', 'producto.id_prod = inventario_alm.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('estado_prod', 'estado_prod.id_estado = inventario_alm.id_estado');
        if($alm!=0){
        $this->db->where('inventario_alm.id_alm', $alm);}
        $this->db->like('producto.nomb_prod', $prod);
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
     public function listar_inventario_mb($limit, $start,$alm) {

        $this->db->select('*');
        $this->db->from('inventario_alm');
        $this->db->join('inv_medios_basicos', 'inv_medios_basicos.id_inv_alm= inventario_alm.id_inv_alm');
        $this->db->join('almacen', 'almacen.id_alm = inventario_alm.id_alm');
        $this->db->join('producto', 'producto.id_prod = inventario_alm.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('estado_prod', 'estado_prod.id_estado = inventario_alm.id_estado');
         if ($alm != 0) {
            $this->db->where('inventario_alm.id_alm', $alm);
        }
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }


    public function add_inventario($datos) {
        $query = $this->db->insert('inventario_alm', $datos);
        return $this->db->insert_id();
    }
    public function add_inventario_alm($datos) {
        $query = $this->db->insert('inv_prod_venta', $datos);
    }
     public function add_inventario_mb($datos) {
        $query = $this->db->insert('inv_medios_basicos', $datos);
    }

    public function update_inventario($id, $datos) {
        $this->db->where('id_inv_alm', $id);
        $query = $this->db->update('inventario_alm', $datos);
    }
    
    public function delete_inventario($id) {
        $this->db->where('id_inv_alm', $id);
        $query = $this->db->delete('inventario_alm');
    }
     public function delete_vent_cant($id) {
        $this->db->where('id_reg', $id);
        $query = $this->db->delete('reg_vent_cant');
    }
    public function delete_inventario_alm($id_inv) {
        $this->db->where('id_inv_alm', $id_inv);
        $query = $this->db->delete('inv_prod_venta');
    }
     public function delete_inventario_mb($id_inv) {
        $this->db->where('id_inv_alm', $id_inv);
        $query = $this->db->delete('inv_medios_basicos');
    }
    public function get_nombre_alm($id_alm) {
        $this->db->where('id_alm', $id_alm);
        $this->db->select('nomb_alm');
        $query = $this->db->get('almacen');
        $row = $query->row();
        return $row->nomb_alm;
    }

    public function get_prod_by_alm($id_alm) {
        $this->db->where('id_alm', $id_alm);
        $this->db->select('*');
        $query = $this->db->get('almacen');
        return $query->result();
    }
    public function get_prod_by_inv($id_inv) {
        $this->db->where('id_inv_alm', $id_inv);
        $this->db->select('*');
        $query = $this->db->get('inventario_alm');
        return $query->result();
    }
    public function get_prod_alm($id_prod,$id_alm,$p_costo) {
        $this->db->select('*');
        $this->db->from('inventario_alm');
        $this->db->join('inv_prod_venta', 'inv_prod_venta.id_inv_alm= inventario_alm.id_inv_alm');
        $this->db->join('almacen', 'almacen.id_alm = inventario_alm.id_alm');
        $this->db->where('inventario_alm.id_prod', $id_prod);
        $this->db->where('inventario_alm.id_alm', $id_alm);
        $this->db->where('inventario_alm.p_costo', $p_costo);
        $query = $this->db->get();
        return $query->result();
    }
    public function get_prod_alm_mb($id_prod,$id_alm,$p_costo) {
        $this->db->select('*');
        $this->db->from('inventario_alm');
        $this->db->join('inv_medios_basicos', 'inv_medios_basicos.id_inv_alm= inventario_alm.id_inv_alm');
        $this->db->join('almacen', 'almacen.id_alm = inventario_alm.id_alm');
        $this->db->where('inventario_alm.id_prod', $id_prod);
        $this->db->where('inventario_alm.id_alm', $id_alm);
        $this->db->where('inventario_alm.p_costo', $p_costo);
        $query = $this->db->get();
        return $query->result();
    }
	 public function add_venta_cantidad($datos) {
        $query = $this->db->insert('reg_vent_cant', $datos);
       
    }
	
	
    public function get_importe_costo() {

        $this->db->select('inventario_alm.importe');
        $this->db->from('inventario_alm');
		$this->db->join('inv_prod_venta', 'inv_prod_venta.id_inv_alm= inventario_alm.id_inv_alm');
        $query = $this->db->get();
        return $query;
    }
	
	public function fix_bd_null_data() {
		$null=null;
        $this->db->where('id_prod', $null);
        $query = $this->db->delete('inventario_alm');
    }
    public function fix_bd_null_data_alm() {
		$null=null;
        $this->db->where('tipo_compra', $null);
        $query = $this->db->delete('inv_prod_venta');
    }

}