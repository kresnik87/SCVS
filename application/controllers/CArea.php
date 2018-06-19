<?php

class CArea extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MArea');
    }

    public function ext_get_Area() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('area_venta');

        $data = $this->MArea->listar_area($limit, $start);
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
    }

    public function ext_add_Area() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        //meto todos os datos desde la view en un arreglo...
        $d_Area = array(
            'nomb_area' => $data->nomb_area
            
        );
        $existe = null;
        $existe = $this->MArea->search_area($data->nomb_area);
        if ($existe) {
            echo json_encode(array(
                "success" => false,
                "msg" => "Nombre de Area en uso"
            ));
        } else {
            $this->MArea->add_area($d_Area); 
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error()
            ));
        }
    }

    public function ext_update_Area() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        //meto todos os datos desde la view en un arreglo...
        $datos = array(
            'nomb_area' => $data->nomb_area
           
        );
        $this->MArea->update_area($data->id_area, $datos); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_Area() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MArea->delete_area($data->id_area); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}

