<?php

class CInventarioAlm extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MInventarioAlm');
		$this->load->model('MAlmacen');
        $this->load->model('MProductos');
        $this->load->model('MLog');
		 $this->load->model('MNotificaciones');
         $this->load->model('MReportes');
        
    }

    public function ext_get_inventario() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 100;
        if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'id_alm' => $_REQUEST['id_alm'],
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'p_costo' => $_REQUEST['p_costo'],
                'marca' => $_REQUEST['marca'],
                'descripcion' => $_REQUEST['descripcion'],
                'costo_inicial' => $_REQUEST['costo_inicial'],
                'costo_final' => $_REQUEST['costo_final']
            );
            $data = $this->MInventarioAlm->filtro($datos, $limit, $start);
            $dat = $this->MInventarioAlm->filtro($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        } else {
            $data = $this->MInventarioAlm->listar_inventario_prod_venta($limit, $start);
            $total = $this->db->count_all('inv_prod_venta');
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }
    }
     public function ext_get_existencia_alm() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 100;
        if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'id_alm' => $_REQUEST['id_alm'],
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'p_costo_inicial' => $_REQUEST['p_costo_inicial'],
                'p_costo_final' => $_REQUEST['p_costo_final'],
                'fecha_inicial' => $_REQUEST['fecha_inicial'],
                'marca' => $_REQUEST['marca']
                
            );
            $data = $this->MReportes->filtro_existencia_alm($datos, $limit, $start);
            $dat = $this->MReportes->filtro_existencia_alm($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        } else {
            $data = $this->MReportes->listar_existencia_alm($limit, $start);
            $total = $this->db->count_all('registro_existencia_alm');
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }
    }
    public function ext_get_inventario_mb() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        if (isset($_REQUEST['alm'])) {
            $alm = $_REQUEST['alm'];
        } else {
            $alm = 0;
        }
        $data = $this->MInventarioAlm->listar_inventario_mb($limit, $start, $alm);
        $total = $this->db->count_all('inv_medios_basicos');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
    }

    public function ext_add_inventario() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $existe = null;
        $existe = $this->MInventarioAlm->get_prod_alm($data->id_prod, $data->id_alm, $data->p_costo);
        if ($existe) {
            $this->update_inventario($data, $existe);
        } else {
            $cantidad = $data->cantidad;
            $importe = $data->cantidad * $data->p_costo;
            $precio_costo = $data->p_costo;
            $uid = $this->session->userdata('uid');
            $d_log = array(
                'cant' => $data->cantidad,
                'importe' => $importe,
                'tipo_compra' => $data->tipo_compra,
                'fecha' => $data->fecha,
                'id_estado' => $data->id_estado,
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo' => $precio_costo,
                'uid' => $uid,
                'id_mov' => 1
            );
            $fecha=new DateTime();
            $d_existencia = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$data->cantidad,
                'uid' => $uid
               
            );
            $d_inv = array(
                'cantidad' => $cantidad,
                'importe' => $importe,
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'id_estado' => $data->id_estado,
                'p_costo' => $precio_costo
            );
            $this->MLog->add_log_alm($d_log);
            $this->MLog->add_log_existencia_alm($d_existencia);
            $id_inv = $this->MInventarioAlm->add_inventario($d_inv);
            $d_inv_alm = array(
                'id_inv_alm' => $id_inv,
                'tipo_compra' => $data->tipo_compra
            );
            $d_prod = array(
                'p_costo' => $precio_costo
            );
            $this->MInventarioAlm->add_inventario_alm($d_inv_alm);
            $this->MProductos->update_prod($data->id_prod, $d_prod);
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error()
            ));
        }
    }

    public function ext_add_inventario_mb() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $existe = null;
        $existe = $this->MInventarioAlm->get_prod_alm_mb($data->id_prod, $data->id_alm, $data->p_costo);
        if ($existe) {
            $this->update_inventario_mb($data, $existe);
        } else {
            $cantidad = $data->cantidad;
            $importe = $data->cantidad * $data->p_costo;
            $precio_costo = $data->p_costo;
            $uid = $this->session->userdata('uid');
            $d_log = array(
                'cant' => $data->cantidad,
                'importe' => $importe,
                'fecha' => $data->fecha_entrada,
                'id_estado' => $data->id_estado,
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'uid' => $uid,
                'id_mov' => 1
            );
           
            $d_inv = array(
                'cantidad' => $cantidad,
                'importe' => $importe,
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'id_estado' => $data->id_estado,
                'p_costo' => $precio_costo
            );
            $this->MLog->add_log_mb($d_log);

            $id_inv = $this->MInventarioAlm->add_inventario($d_inv);
            $d_inv_alm = array(
                'id_inv_alm' => $id_inv,
                'fecha_entrada' => $data->fecha_entrada
            );
            $this->MInventarioAlm->add_inventario_mb($d_inv_alm);
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error()
            ));
        }
    }

    public function ext_update_cost() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $importe = $data->cantidad * $data->p_costo;
        $datos_inv = array(
            'p_costo' => $data->p_costo,
            'cantidad'=> $data->cantidad,
            'importe' => $importe
        );
         $fecha=new DateTime();
         $uid = $this->session->userdata('uid');
        $d_existencia = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$data->cantidad,
                'uid' => $uid
            );
        $this->MLog->add_log_existencia_alm($d_existencia);
        $this->MInventarioAlm->update_inventario($data->id_inv_alm, $datos_inv);
        $datos_prod = array(
            'p_costo' => $data->p_costo
        );
        $this->MProductos->update_prod($data->id_prod, $datos_prod);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function update_inventario($data, $dat_prod) {
        $cantidad_alm = $dat_prod[0]->cantidad;
        $importe = $data->cantidad * $data->p_costo;
        $cant_total = $cantidad_alm + $data->cantidad;
        $importe_total = $cant_total * $data->p_costo;
        $uid = $this->session->userdata('uid');
        $d_log = array(
            'cant' => $data->cantidad,
            'importe' => $importe,
            'tipo_compra' => $data->tipo_compra,
            'fecha' => $data->fecha,
            'id_estado' => $data->id_estado,
            'id_alm' => $data->id_alm,
            'id_prod' => $data->id_prod,
            'uid' => $uid,
            'id_mov' => 1
        );
        $fecha=new DateTime();
        $d_existencia = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$cant_total,
                'uid' => $uid
            );
        $d_inv = array(
            'cantidad' => $cant_total,
            'importe' => $importe_total,
            'id_alm' => $data->id_alm,
            'id_prod' => $data->id_prod,
            'id_estado' => $data->id_estado,
            'p_costo' => $data->p_costo
        );
        $this->MLog->add_log_alm($d_log);
         $this->MLog->add_log_existencia_alm($d_existencia);
        $this->MInventarioAlm->update_inventario($dat_prod[0]->id_inv_alm, $d_inv);
    }

    public function update_inventario_mb($data, $dat_prod) {
        $cantidad_alm = $dat_prod[0]->cantidad;
        $importe = $data->cantidad * $data->p_costo;
        $uid = $this->session->userdata('uid');
        $d_log = array(
            'cant' => $data->cantidad,
            'importe' => $importe,
            'tipo_compra' => $data->tipo_compra,
            'fecha' => $data->fecha,
            'id_estado' => $data->id_estado,
            'id_alm' => $data->id_alm,
            'id_prod' => $data->id_prod,
            'uid' => $uid,
            'id_mov' => 1
        );
        $cant_total = $cantidad_alm + $data->cantidad;
        $importe_total = $cant_total * $data->p_costo;
        $d_inv = array(
            'cantidad' => $cant_total,
            'importe' => $importe_total,
            'id_alm' => $data->id_alm,
            'id_prod' => $data->id_prod,
            'id_estado' => $data->id_estado,
            'p_costo' => $data->p_costo
        );
        $this->MLog->add_log_alm($d_log);
        $this->MInventarioAlm->update_inventario($dat_prod[0]->id_inv_alm, $d_inv);
    }

    public function ext_delete_inventario() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MInventarioAlm->delete_inventario_alm($data->id_inv_alm);
        $this->MInventarioAlm->delete_inventario($data->id_inv_alm);
        $this->MLog->delete_by_prod($data->id_prod, $data->id_alm);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

    public function ext_delete_inventario_mb() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MInventarioAlm->delete_inventario_mb($data->id_inv_alm);
        $this->MInventarioAlm->delete_inventario($data->id_inv_alm);
        $this->MLog->delete_by_prod_mb($data->id_prod, $data->id_alm);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }
	public function ext_delete_reg_venta_cant() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MInventarioAlm->delete_vent_cant($data->id_reg);
       echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }
	public function ext_add_reg_venta_cant() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $uid = $this->session->userdata('uid');
        
            $p_venta = $data->p_venta;
            $importe = $data->cant * $p_venta;
			$importe_costo=$data->cant * $data->p_costo;
        
        $datos_reg_venta = array(
            'cant' => $data->cant,
			'p_costo'=>$data->p_costo,
            'p_venta' => $p_venta,
            'importe' => $importe,
			'importe_costo'=>$importe_costo,
			'utilidad'=>$importe-$importe_costo,
            'fecha' => $data->fecha,
            'id_prod' => $data->id_prod,
			'nomb_cliente'=>$data->nomb_cliente,
            'uid' => $uid
        );
        $inv_alm = $this->MInventarioAlm->get_prod_by_inv($data->id_inv_alm);
        $cant_total = ($inv_alm[0]->cantidad) - ($data->cant);
        $fecha=new DateTime();
        $d_existencia = array(
                'fecha' => $fecha->format('Y-m-d'),
                'id_alm' => $data->id_alm,
                'id_prod' => $data->id_prod,
                'p_costo'=>$data->p_costo,
                'existencia'=>$cant_total,
                'uid' => $uid
            );
        
        $this->MLog->add_log_existencia_alm($d_existencia);
        if($cant_total<=0){
           $this->MInventarioAlm->delete_inventario_alm($data->id_inv_alm); //Aqui agregar una generacion de una notificacion de que se ha agotado el producto vendido.
	       }else{
                 $d_update_inv = array(
                             'cantidad' => $cant_total,
                             'importe' => $cant_total * $inv_alm[0]->p_costo
                                 );
                $this->MInventarioAlm->update_inventario($data->id_inv_alm, $d_update_inv);
            }
        
        $this->MInventarioAlm->add_venta_cantidad($datos_reg_venta);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
        ));
    }


}
