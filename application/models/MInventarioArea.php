<?php

class MInventarioArea extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_inventario($limit, $start) {

        $this->db->select('*');
        $this->db->from('inventario_area');
        $this->db->join('area_venta', 'area_venta.id_area = inventario_area.id_area');
        $this->db->join('producto', 'producto.id_prod = inventario_area.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('estado_prod', 'estado_prod.id_estado = inventario_area.id_estado');
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
        if (!empty($datos['p_costo'])) {
            $this->db->where('inventario_area.p_costo', $datos['p_costo']);
        }
        if (!empty($datos['p_venta'])) {
            $this->db->where('inventario_area.p_venta', $datos['p_venta']);
        }
       
        if (!empty($datos['marca'])) {
            $this->db->like('marca', $datos['marca']);
        }
        if (!empty($datos['descripcion'])) {
            $this->db->like('descripcion', $datos['descripcion'],'both');
        }
      
         if (!empty($datos['costo_inicial'])) {
            $this->db->where('inventario_area.p_costo >=', $datos['costo_inicial']);
        }
         if (!empty($datos['costo_final'])) {
            $this->db->where('inventario_area.p_costo <=', $datos['costo_final']);
        }
        if (!empty($datos['venta_inicial'])) {
            $this->db->where('inventario_area.p_venta >=', $datos['venta_inicial']);
        }
        if (!empty($datos['venta_final'])) {
            $this->db->where('inventario_area.p_venta <=', $datos['venta_final']);
        }
         if (!empty($datos['id_area'])) {
            $this->db->where('inventario_area.id_area', $datos['id_area']);
        }
        $this->db->select('*');
        $this->db->from('inventario_area');
        $this->db->join('area_venta', 'area_venta.id_area = inventario_area.id_area');
        $this->db->join('producto', 'producto.id_prod = inventario_area.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('estado_prod', 'estado_prod.id_estado = inventario_area.id_estado');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }

    public function add_inventario($datos) {
        $query = $this->db->insert('inventario', $datos);
        return $this->db->insert_id();
    }
    public function add_inventario_area($datos) {
        $query = $this->db->insert('inventario_area', $datos);
    }

    public function update_inventario($id, $datos) {
        $this->db->where('id_inv_area', $id);
        $query = $this->db->update('inventario_area', $datos);
    }

  
    public function delete_inventario_area($id_inv) {
        $this->db->where('id_inv_area', $id_inv);
        $query = $this->db->delete('inventario_area');
    }

    public function get_nombre_area($id_area) {
        $this->db->where('id_area', $id_area);
        $this->db->select('nomb_area');
        $query = $this->db->get('areas');
        $row = $query->row();
        return $row->nomb_area;
    }

    public function get_prod_by_area($id_area) {
        $this->db->where('id_area', $id_area);
        $this->db->select('*');
        $query = $this->db->get('areas');
        return $query->result();
    }

    public function get_prod_area($id_prod,$id_area,$p_venta) {
        $this->db->select('*');
        $this->db->from('inventario_area');
        $this->db->join('area_venta', 'area_venta.id_area = inventario_area.id_area');
        $this->db->where('inventario_area.id_prod', $id_prod);
        $this->db->where('inventario_area.id_area', $id_area);
        $this->db->where('inventario_area.p_venta', $p_venta);
        $query = $this->db->get();
        return $query->result();
    }
     public function get_prod_by_inv($id_inv) {
        $this->db->where('id_inv_area', $id_inv);
        $this->db->select('*');
        $query = $this->db->get('inventario_area');
        return $query->result();
    }
	 public function get_importe_costo() {

        $this->db->select('inventario_area.importe_costo');
        $this->db->from('inventario_area');
        $query = $this->db->get();
        return $query;
    }
	public function fix_bd_null_data() {
		$null=null;
        $this->db->where('id_prod', $null);
        $query = $this->db->delete('inventario_area');
    }
}