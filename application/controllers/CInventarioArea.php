<?php

class CInventarioArea extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MInventarioArea');
        $this->load->model('MInventarioAlm');
        $this->load->model('MProductos');
        $this->load->model('MLog');
        $this->load->model('MTablaConv');
       
    }

    public function ext_get_inventario() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
         if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'id_area' => $_REQUEST['id_area'],
                'p_costo' => $_REQUEST['p_costo'],
                'p_venta' => $_REQUEST['p_venta'],
                'marca' => $_REQUEST['marca'],
                'descripcion' => $_REQUEST['descripcion'],
                'costo_inicial' => $_REQUEST['costo_inicial'],
                'costo_final' => $_REQUEST['costo_final'],
                'venta_inicial' => $_REQUEST['venta_inicial'],
                'venta_final' => $_REQUEST['venta_final']
            );
            $data = $this->MInventarioArea->filtro($datos, $limit, $start);
            $dat = $this->MInventarioArea->filtro($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }else{
        $data = $this->MInventarioArea->listar_inventario($limit, $start);
        $total = $this->db->count_all('inventario_area');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }
    }

    public function ext_add_inventario_area() {
        $info = $_POST["data"];
        $uid = $this->session->userdata('uid');
        $data = json_decode(stripslashes($info));
        $existe = null;
        $existe = $this->MInventarioArea->get_prod_area($data->id_prod, $data->id_area, $data->p_venta);
        if ($existe) {
            $this->update_inventario($data, $existe);
        } else {
            $cantidad = $data->cantidad;
            $precio_venta = $data->p_venta;
            $precio_costo = $data->p_costo;
            $id_alm = $data->id_alm;
            $id_inv_alm = $data->id_inv_alm;
            $d_log_area = array(
                'cant' => $data->cantidad,
                'importe' => $precio_venta * $cantidad,
                'fecha' => $data->fecha,
                'id_area' => $data->id_area,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'id_estado' => $data->id_estado,
                'uid' => $uid,
                'id_mov' => 1
            );
            $d_log_alm = array(
                'cant' => $data->cantidad,
                'importe' => $precio_costo * $cantidad,
                'tipo_compra' => $data->tipo_compra,
                'fecha' => $data->fecha,
                'id_estado' => $data->id_estado,
                'id_alm' => $data->id_alm,
                'p_costo'=>$data->p_costo,
                'id_prod' => $data->id_prod,
                'uid' => $uid,
                'id_mov' => 2
            );
            $fecha=new DateTime();
            $d_existencia_area = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_area' => $data->id_area,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$data->cantidad,
                'uid' => $uid
            );
            
            $d_inv = array(
                'cantidad' => $cantidad,
                'importe' => $precio_venta * $cantidad,
                'id_estado' => $data->id_estado,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'importe_costo'=>$cantidad*$precio_costo,
                'id_area' => $data->id_area,
                'p_venta' => $precio_venta,
                'p_venta_cantidad' => $data->p_venta_cantidad
            );

            $this->MLog->add_log_area($d_log_area);
            $this->MLog->add_log_alm($d_log_alm);
            $this->MLog->add_log_existencia_area($d_existencia_area);
            $this->MInventarioArea->add_inventario_area($d_inv);
            $prod_alm = $this->MInventarioAlm->get_prod_by_inv($data->id_inv_alm);
            $cant_alm = ($prod_alm[0]->cantidad) - $cantidad;
            $fecha=new DateTime();
            $d_existencia_alm = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$cant_alm,
                'uid' => $uid
            );
            if($cant_alm==0){
            $this->MInventarioAlm->delete_inventario_alm($data->id_inv_alm);
            $this->MInventarioAlm->delete_inventario($data->id_inv_alm);
            
			}else{
            $d_alm = array(
                'cantidad' => $cant_alm,
                'importe' => $cant_alm * $data->p_costo
            );
            $this->MInventarioAlm->update_inventario($data->id_inv_alm, $d_alm);
            }
            $this->MLog->add_log_existencia_alm($d_existencia_alm);
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error()
            ));
        }
    }
     public function ext_baja_prod() {
        $info = $_REQUEST["data"];
        $uid = $this->session->userdata('uid');
        $data = json_decode(stripslashes($info));
        var_dump($data);die;
         $datos_baja = array(
               
                'p_costo' => $data->p_costo,
                'fecha' => $data->fecha,
                'id_area' => $data->id_area,
                'id_prod' => $data->id_prod,
                'motivos' => $data->motivos,
                'uid' => $uid
                
            );
		
		
        
    }
     public function ext_update_precio() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $importe = $data->cantidad * $data->p_venta;
        $importe_costo=$data->cantidad*$data->p_costo;
        $datos_inv = array(
            'p_venta' => $data->p_venta,
            'cantidad' => $data->cantidad,
            'importe_costo'=>$importe_costo,
            'importe' => $importe
           
        );
         $fecha=new DateTime();
        $d_existencia_area = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_area' => $data->id_area,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$data->cantidad,
                'uid' => $uid
            );
        $this->MLog->add_log_existencia_area($d_existencia_area);
        $this->MInventarioArea->update_inventario($data->id_inv_area, $datos_inv);
       
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }
    public function update_inventario($data, $dat_prod) {
        $cantidad_area = $dat_prod[0]->cantidad;
        $precio_costo = $data->p_costo;
        $importe = $data->cantidad * $data->p_venta;
        $uid = $this->session->userdata('uid');
        $d_log_area = array(
            'cant' => $data->cantidad,
            'importe' => $importe,
            'fecha' => $data->fecha,
            'id_area' => $data->id_area,
            'id_prod' => $data->id_prod,
            'id_estado' => $data->id_estado,
            'uid' => $uid,
            'id_mov' => 1
        );
        $d_log_alm = array(
            'cant' => $data->cantidad,
            'importe' => $precio_costo * $data->cantidad,
            'tipo_compra' => $data->tipo_compra,
            'fecha' => $data->fecha,
            'id_estado' => $data->id_estado,
            'id_alm' => $data->id_alm,
            'id_prod' => $data->id_prod,
            'uid' => $uid,
            'id_mov' => 2
        );
        $cant_total = $cantidad_area + $data->cantidad;
        $importe_total = $cant_total * $data->p_venta;
       $fecha=new DateTime();
        $d_existencia_area = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_area' => $data->id_area,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$cant_total,
                'uid' => $uid
            );
        $d_inv = array(
            'cantidad' => $cant_total,
            'importe' => $importe_total,
            'importe_costo'=>$cant_total*$data->p_costo
            
        );
        $prod_alm = $this->MInventarioAlm->get_prod_by_inv($data->id_inv_alm);
        $cant_alm = ($prod_alm[0]->cantidad) - $data->cantidad;
        $d_alm = array(
            'cantidad' => $cant_alm,
            'importe' => $cant_alm * $data->p_costo
        );
        $d_existencia_alm = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$cant_alm,
                'uid' => $uid
            );
        
        $this->MInventarioAlm->update_inventario($data->id_inv_alm, $d_alm);
        $this->MLog->add_log_alm($d_log_alm);
        $this->MLog->add_log_area($d_log_area);
        $this->MLog->add_log_existencia_area($d_existencia_area);
        $this->MLog->add_log_existencia_alm($d_existencia_alm);
        $this->MInventarioArea->update_inventario($dat_prod[0]->id_inv_area, $d_inv);
         echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Actualizados Correctamente" : mysql_error()
            ));
    }
	

    public function ext_delete_inventario_area() {
      $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MInventarioArea->delete_inventario_area($data->id_inv_area);
         $this->MLog->delete_log_area_by_prod($data->id_prod,$data->id_area);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}
