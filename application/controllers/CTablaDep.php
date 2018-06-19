<?php

class CTablaDep extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MTablaDep');
       
    }

    public function ext_get_tabla() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('tabla_depreciacion');
       
            $data = $this->MTablaDep->listar_tabla_dep($limit, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
         }

    public function ext_add_tabla() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datos = array(
            'concepto' => $data->concepto,
            'porciento'=>$data->porciento,
            'tiempo'=>$data->tiempo
           
        );
        $existe = null;
        $existe = $this->MTablaDep->search_concepto($data->concepto);
        if ($existe) {
            echo json_encode(array(
                "success" => false,
                "msg" => "Esta concepto ya existe"
            ));
        } else {
            $id_prod = $this->MTablaDep->add_tabla_dep($datos);
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
            ));
        }
    }

    public function ext_update_tabla() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datos = array(
           'concepto' => $data->concepto,
            'porciento'=>$data->porciento,
            'tiempo'=>$data->tiempo
            
        );
        $this->MTablaDep->update_tabla_dep($data->id_tabla, $datos); 
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_tabla() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MTablaDep->delete_tabla_dep($data->id_tabla);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}

