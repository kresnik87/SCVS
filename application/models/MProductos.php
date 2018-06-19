<?php

class MProductos extends CI_Model {

    function __construct() {
        // Call the Model constructor
        parent::__construct();
    }

    public function listar_productos($limit, $start) {

        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('tipo_producto', 'venta_directa.id_tipo_prod = tipo_producto.id_tipo_prod');
        $this->db->join('tabla_depreciacion', 'tabla_depreciacion.id_tabla = venta_directa.id_tabla');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
    public function filtro($datos, $limit, $start) {

        if (!empty($datos['nomb_prod'])) {
            $this->db->like('nomb_prod', $datos['nomb_prod'], 'both');
        }
        if (!empty($datos['id_tipo'])) {
            $this->db->where('venta_directa.id_tipo_prod', $datos['id_tipo']);
        }
        if (!empty($datos['p_costo'])) {
            $this->db->where('p_costo', $datos['p_costo']);
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
        $this->db->from('producto');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('tipo_producto', 'tipo_producto.id_tipo_prod = venta_directa.id_tipo_prod');
       
        if ($limit != 0) {
            $this->db->limit($limit, $start);
        }
        $query = $this->db->get();
        return $query;
    }
    
    public function listar_productos_rep($limit, $start) {

        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('componentes_rep', 'producto.id_prod = componentes_rep.id_prod');
        $this->db->join('tipo_producto', 'componentes_rep.id_tipo_prod = tipo_producto.id_tipo_prod');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
     public function listar_estado($limit, $start) {

        $this->db->select('*');
        $this->db->from('estado_prod');
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }


    public function add_prod($datos) {
        $query = $this->db->insert('producto', $datos);
        return $this->db->insert_id();
    }

    public function total_productos() {
        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $query = $this->db->get();
        return count($query->result());
    }
    public function add_prod_venta($datos) {
        $query = $this->db->insert('venta_directa', $datos);
    }

    public function add_prod_rep($datos) {
        $query = $this->db->insert('componentes_rep', $datos);
    }

    public function update_prod($id, $datos) {
        $this->db->where('id_prod', $id);
        $query = $this->db->update('producto', $datos);
    }

    public function update_prod_venta($id, $datos) {
        $this->db->where('id_prod', $id);
        $query = $this->db->update('venta_directa', $datos);
    }

    public function update_prod_rep($id, $datos) {
        $this->db->where('id_prod', $id);
        $query = $this->db->update('componentes_rep', $datos);
    }

    public function delete_productos_rep($id) {
        $this->db->where('id_prod', $id);
        $query = $this->db->delete('componentes_rep');
    }

    public function delete_productos_venta($id) {
        $this->db->where('id_prod', $id);
        $query = $this->db->delete('venta_directa');
    }

    public function delete_productos($id) {
        $this->db->where('id_prod', $id);
        $query = $this->db->delete('producto');
    }

    public function get_producto($nomb_prod, $limit, $start) {
        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('tipo_producto', 'venta_directa.id_tipo_prod = tipo_producto.id_tipo_prod');
        $this->db->join('tabla_depreciacion', 'tabla_depreciacion.id_tabla = venta_directa.id_tabla');
        $this->db->like('nomb_prod', $nomb_prod);
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }
    
     public function get_producto_id() {
        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $query = $this->db->get();
        return $query->result();
        
    }
     public function get_producto_rep($nomb_prod, $limit, $start) {
        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('componentes_rep', 'producto.id_prod = componentes_rep.id_prod');
        $this->db->like('nomb_prod', $nomb_prod);
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query;
    }

    public function get_producto_by_id($id_prod) {
        $this->db->select('*');
        $this->db->from('producto');
        $this->db->where('id_prod', $id_prod);
        $query = $this->db->get();
        return $query->result();
    }

    public function search_productos($nombre, $p_costo,$tipo_prod) {
        $this->db->select('*');
        $this->db->from('producto');
        $this->db->join('venta_directa', 'producto.id_prod = venta_directa.id_prod');
        $this->db->join('tipo_producto', 'venta_directa.id_tipo_prod = tipo_producto.id_tipo_prod');
        $this->db->where('nomb_prod', $nombre);
        $this->db->where('p_costo', $p_costo);
        $this->db->where('venta_directa.id_tipo_prod', $tipo_prod);
        $query = $this->db->get();
        return $query->result();
    }

    public function set_precio_costo($id, $datos) {
        $this->db->where('id_prod', $id);
        $query = $this->db->update('producto', $datos);
    }

}