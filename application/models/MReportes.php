<?php

class MReportes extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_report_alm($limit, $start,$tipo) {
        $this->db->select('*');
        $this->db->from('log_alm');
        $this->db->join('almacen', 'almacen.id_alm= log_alm.id_alm');
        $this->db->join('producto', 'producto.id_prod= log_alm.id_prod');
        $this->db->join('tipo_mov', 'tipo_mov.id_mov= log_alm.id_mov');
        $this->db->join('perfil', 'perfil.uid=log_alm.uid');       
        $this->db->where('log_alm.id_mov', $tipo);
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
	    public function listar_reg_venta_cant($limit, $start) {
        $this->db->select('*');
        $this->db->from('reg_vent_cant');
        $this->db->join('producto', 'producto.id_prod= reg_vent_cant.id_prod');
        $this->db->join('perfil', 'perfil.uid=reg_vent_cant.uid');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
     public function listar_existencia_alm($limit, $start) {
        $this->db->select('*');
        $this->db->from('registro_existencia_alm');
        $this->db->join('almacen', 'almacen.id_alm= registro_existencia_alm.id_alm');
        $this->db->join('producto', 'producto.id_prod= registro_existencia_alm.id_prod');
        $this->db->join('perfil', 'perfil.uid=registro_existencia_alm.uid');    
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
    public function filtro_rep_alm($datos, $limit, $start,$tipo) {

        if (!empty($datos['nomb_prod'])) {
            $this->db->like('nomb_prod', $datos['nomb_prod'], 'both');
        }
        if (!empty($datos['id_tipo'])) {
            $this->db->where('id_tipo_prod', $datos['id_tipo']);
        }
         if (!empty($datos['alm'])) {
            $this->db->where('log_alm.id_alm', $datos['alm']);
        }
       
        if (!empty($datos['p_costo'])) {
            $this->db->where('log_alm.p_costo', $datos['p_costo']);
        }
       
        if (!empty($datos['marca'])) {
            $this->db->like('marca', $datos['marca']);
        }
       
        if (!empty($datos['costo_inicial'])) {
            $this->db->where('log_alm.p_costo >=', $datos['costo_inicial']);
        }
        if (!empty($datos['costo_final'])) {
            $this->db->where('log_alm.p_costo <=', $datos['costo_final']);
        }
        if (!empty($datos['fecha_inicial'])) {
            $this->db->where('log_alm.fecha >=', $datos['fecha_inicial']);
        }
         if (!empty($datos['fecha_final'])) {
            $this->db->where('log_alm.fecha <=', $datos['fecha_final']);
        }
                 
        $this->db->select('*');
       $this->db->from('log_alm');
        $this->db->join('producto', 'producto.id_prod= log_alm.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('perfil', 'perfil.uid=log_alm.uid');
        $this->db->join('tipo_mov', 'tipo_mov.id_mov= log_alm.id_mov');
        $this->db->where('log_alm.id_mov', $tipo);
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }
    public function filtro_existencia_alm($datos, $limit, $start) {

        if (!empty($datos['nomb_prod'])) {
            $this->db->like('nomb_prod', $datos['nomb_prod'], 'both');
        }
        if (!empty($datos['id_tipo'])) {
            $this->db->where('id_tipo_prod', $datos['id_tipo']);
        }
         if (!empty($datos['alm'])) {
            $this->db->where('registro_existencia_alm.id_alm', $datos['alm']);
        }
       
        if (!empty($datos['p_costo'])) {
            $this->db->where('registro_existencia_alm.p_costo', $datos['p_costo']);
        }
       
        if (!empty($datos['marca'])) {
            $this->db->like('marca', $datos['marca']);
        }
       
        if (!empty($datos['costo_inicial'])) {
            $this->db->where('registro_existencia_alm.p_costo >=', $datos['costo_inicial']);
        }
        if (!empty($datos['costo_final'])) {
            $this->db->where('registro_existencia_alm.p_costo <=', $datos['costo_final']);
        }
        if (!empty($datos['fecha_inicial'])) {
            $this->db->where('registro_existencia_alm.fecha <', $datos['fecha_inicial']);
        }
        
                 
        $this->db->select('*');
       $this->db->from('registro_existencia_alm');
        $this->db->join('producto', 'producto.id_prod= registro_existencia_alm.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('perfil', 'perfil.uid=registro_existencia_alm.uid');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }
    public function filtro_rep_area($datos, $limit, $start) {

        if (!empty($datos['nomb_prod'])) {
            $this->db->like('nomb_prod', $datos['nomb_prod'], 'both');
        }
        if (!empty($datos['id_tipo'])) {
            $this->db->where('id_tipo_prod', $datos['id_tipo']);
        }
         if (!empty($datos['area'])) {
            $this->db->where('log_area.id_area', $datos['area']);
        }
       
        if (!empty($datos['p_costo'])) {
            $this->db->where('log_area.p_costo', $datos['p_costo']);
        }
       
        if (!empty($datos['marca'])) {
            $this->db->like('marca', $datos['marca']);
        }
       
        if (!empty($datos['costo_inicial'])) {
            $this->db->where('log_area.p_costo >=', $datos['costo_inicial']);
        }
        if (!empty($datos['costo_final'])) {
            $this->db->where('log_area.p_costo <=', $datos['costo_final']);
        }
        if (!empty($datos['fecha_inicial'])) {
            $this->db->where('log_area.fecha >=', $datos['fecha_inicial']);
        }
         if (!empty($datos['fecha_final'])) {
            $this->db->where('log_area.fecha <=', $datos['fecha_final']);
        }
                 
        $this->db->select('*');
       $this->db->from('log_area');
        $this->db->join('producto', 'producto.id_prod= log_area.id_prod');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('perfil', 'perfil.uid=log_area.uid');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
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
       
        if (!empty($datos['venta_inicial'])) {
            $this->db->where('reg_vent_cant.p_venta >=', $datos['venta_inicial']);
        }
        if (!empty($datos['venta_final'])) {
            $this->db->where('reg_vent_cant.p_venta <=', $datos['venta_final']);
        }
        if (!empty($datos['fecha_inicial'])) {
            $this->db->where('reg_vent_cant.fecha >=', $datos['fecha_inicial']);
        }
         if (!empty($datos['fecha_final'])) {
            $this->db->where('reg_vent_cant.fecha <=', $datos['fecha_final']);
        }
         
        
        $this->db->select('*');
       $this->db->from('reg_vent_cant');
        $this->db->join('producto', 'producto.id_prod= reg_vent_cant.id_prod');
		$this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('perfil', 'perfil.uid=reg_vent_cant.uid');
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }

public function listar_report_area($limit, $start) {
        $this->db->select('*');
        $this->db->from('log_area');
        $this->db->join('area_venta', 'area_venta.id_area= log_area.id_area');
        $this->db->join('producto', 'producto.id_prod= log_area.id_prod');
        $this->db->join('tipo_mov', 'tipo_mov.id_mov= log_area.id_mov');
        $this->db->join('perfil', 'perfil.uid=log_area.uid'); 
        $this->db->join('estado_prod', 'estado_prod.id_estado=log_area.id_estado');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
    public function update_almacen($id, $datos) {
        $this->db->where('id_alm', $id);
        $query = $this->db->update('almacen', $datos);
    }

     public function update_ent_alm($datos,$id ) {
        $this->db->where('id_log', $id);
        $query = $this->db->update('log_alm', $datos);
    }

    public function delete_report_ent($id) {
        $this->db->where('id_log', $id);
        $query = $this->db->delete('log_alm');
    }
    
    public function get_p_costo_ent_alm() {

        $this->db->select('*');
        $this->db->from('log_alm');
        $query = $this->db->get();
        return $query;
    }
   

}