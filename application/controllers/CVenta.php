<?php

class CVenta extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MVenta');
        $this->load->model('MInventarioArea');
        $this->load->model('MLog');
    }

    public function ext_get_reg_venta() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
       if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'id_area' => $_REQUEST['id_area'],
                'p_venta' => $_REQUEST['p_venta'],
                'marca' => $_REQUEST['marca'],
                'descripcion' => $_REQUEST['descripcion'],
                'fecha_inicial' => $_REQUEST['fecha_inicial'],
                'fecha_final' => $_REQUEST['fecha_final'],
                'venta_inicial' => $_REQUEST['venta_inicial'],
                'venta_final' => $_REQUEST['venta_final']
            );
            $data = $this->MVenta->filtro($datos, $limit, $start);
            $dat = $this->MVenta->filtro($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }else{
        $data = $this->MVenta->listar_reg_venta($limit, $start); //cargo el resu;ltado de una funcion en la model	        
        $total = $this->db->count_all('registro_ventas');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';}
    }

    public function ext_add_venta_area() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $uid = $this->session->userdata('uid');
        if ($data->usar_p_cant == false) {
            $p_venta = $data->p_venta;
            $importe = $data->cantidad * $p_venta;
        } else {
            $p_venta = $data->p_venta_cantidad;
            $importe = $data->cantidad * $data->p_venta_cantidad;
        }
		$importe_costo=$data->cantidad*$data->p_costo;
        $datos_reg_venta = array(
            'cant' => $data->cantidad,
			'p_costo'=>$data->p_costo,
            'p_venta' => $p_venta,
            'importe' => $importe,
			'importe_costo'=>$importe_costo,
			'utilidad'=>$importe-$importe_costo,
            'fecha' => $data->fecha,
            'id_prod' => $data->id_prod,
            'id_area' => $data->id_area,
            'uid' => $uid,
        );
        $inv_area = $this->MInventarioArea->get_prod_by_inv($data->id_inv_area);
        $cant_total = ($inv_area[0]->cantidad) - ($data->cantidad);
        if($cant_total==0){
           $this->MInventarioArea->delete_inventario_area($data->id_inv_area); 
        }else{
        $importe_total = $cant_total * $data->p_venta;
        $d_update_inv = array(
            'cantidad' => $cant_total,
            'importe' => $importe_total,
            'importe_costo' => $cant_total * $data->p_costo
        );
        $this->MInventarioArea->update_inventario($data->id_inv_area, $d_update_inv);
        }
        if ($data->nombre != '') {
            $datos_vale_venta = array(
                'cantidad' => $data->cantidad,
                'precio' => $p_venta,
                'importe' => $importe,
                'nomb_cliente' => $data->nombre,
                'ci' => $data->ci,
                'fecha' => $data->fecha,
                'id_prod' => $data->id_prod,
                'id_area' => $data->id_area,
                'uid' => $uid
            );
            $this->MVenta->add_vale_venta($datos_vale_venta);
        }
       $fecha=new DateTime();
        $d_existencia_area = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_area' => $data->id_area,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$cant_total,
                'uid' => $uid
            );
        $this->MLog->add_log_existencia_area($d_existencia_area);
        $this->MVenta->add_reg_venta($datos_reg_venta);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
        ));
    }

   

    public function ext_delete_reg_venta() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MVenta->delete_reg_venta($data->id_reg);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}
