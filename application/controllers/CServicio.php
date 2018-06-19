<?php

class CServicio extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MServicio');
    }

    public function ext_get_servicio() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $data = $this->MServicio->listarServicio(); //cargo el resu;ltado de una funcion en la model	        
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($arr) . '}';
    }
	public function ext_get_reg_serv() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
       if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'id_serv' => $_REQUEST['id_serv'],
                'id_area' => $_REQUEST['id_area'],
                'precio' => $_REQUEST['precio'],
                'fecha_inicial' => $_REQUEST['fecha_inicial'],
                'fecha_final' => $_REQUEST['fecha_final'],
                'venta_inicial' => $_REQUEST['venta_inicial'],
                'venta_final' => $_REQUEST['venta_final']
            );
            $data = $this->MServicio->filtro($datos, $limit, $start);
            $dat = $this->MServicio->filtro($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }else{
        $data = $this->MServicio->listar_reg_serv($limit, $start); //cargo el resu;ltado de una funcion en la model	        
        $total = $this->db->count_all('registro_servicio');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';}
    }

    public function ext_get_tipo_costo() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $data = $this->MServicio->listar_tipo_costo(); //cargo el resu;ltado de una funcion en la model	        
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($arr) . '}';
    }

    public function ext_add_servicio() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datos = array(
            'nomb_servicio' => $data->nomb_servicio,
            'descripcion' => $data->descripcion,
            'p_costo' => $data->p_costo,
            'p_venta' => $data->p_venta,
            'id_tipo_costo' => $data->id_tipo_costo,
        );
        $existe = null;
        $existe = $this->MServicio->search_servicio($data->nomb_servicio);
        if ($existe) {
            echo json_encode(array(
                "success" => false,
                "msg" => "Servicio existente"
            ));
        } else {
            $this->MServicio->add_servicio($datos); //y lo mando para la funcion register enh la model
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
            ));
        }
    }

    public function ext_update_servicio() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datos = array(
            'nomb_servicio' => $data->nomb_servicio,
            'descripcion' => $data->descripcion,
            'p_costo' => $data->p_costo,
            'p_venta' => $data->p_venta,
            'id_tipo_costo' => $data->id_tipo_costo
        );
        $this->MServicio->update($data->id_serv, $datos); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_servicio() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MUm->delete($data->id_um); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }
	
	public function ext_add_reg_serv() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $uid = $this->session->userdata('uid');
		if($data->p_venta==0){
			$precio=$this->MServicio->get_precio_serv_id($data->id_serv);
		}
		$precio=$data->p_venta;
        $datos_reg_serv = array(
            'precio' => $precio,
			'cant'=>$data->cant,
            'importe' => $precio*$data->cant,
            'fecha' => $data->fecha,
            'id_serv' => $data->id_serv,
            'id_area' => $data->id_area,
            'uid' => $uid
        );
        
        $this->MServicio->add_reg_serv($datos_reg_serv);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
        ));
		
    }
	
	public function update_reg_serv($data,$dat_reg){
		
		$cant = $dat_reg[0]->cant;
        $precio = $data->precio;
        $importe = (++$cant) * $dat_reg[0]->precio;
        $uid = $this->session->userdata('uid');
        $d_reg_serv = array(
            'cant' => $cant,
            'importe' => $importe,
            'fecha' => $data->fecha,
            'id_area' => $data->id_area,
            'id_serv' => $data->id_serv,
            'uid' => $uid
            
        );
        $this->MServicio->update_reg_servicio($dat_reg[0]->id_reg_serv, $d_reg_serv);
         echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Actualizados Correctamente" : mysql_error()
            ));
	}
	
	    public function ext_delete_reg_serv() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MServicio->delete_reg_serv($data->id_reg_serv);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }
	

}
