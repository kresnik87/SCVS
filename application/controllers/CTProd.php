<?php

class CTProd extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MTProd');
    }

    public function ext_get_tipo_prod() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('tipo_producto');
        $data = $this->MTProd->listar_tipo_prod($limit, $start);
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
    }

    public function ext_add_tipo_prod() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datosComp = array(
            'tipo_prod' => $data->tipo_prod
        );
        $id_comp = $this->MTProd->add_tipo_prod($datosComp);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
        ));
    }

    public function ext_update_tipo_prod() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
         $datosComp = array(
            'tipo_prod' => $data->tipo_prod
        );
        $this->MTProd->update_tipo_prod($data->id_tipo_prod, $datosComp);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_tipo_prod() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MTProd->delete_tipo_prod($data->id_tipo_prod);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}

