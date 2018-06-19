<?php

class CAlmacen extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MAlmacen');
        $this->load->model('MInventarioAlm');
    }

    public function ext_get_almacen() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $data = $this->MAlmacen->listar_Almacen(); //cargo el resu;ltado de una funcion en la model	        
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($arr) . '}';
    }

    public function ext_add_almacen() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        //meto todos os datos desde la view en un arreglo...
        $datos = array(
            'nomb_alm' => $data->nomb_alm
        );
        $existe = null;
        $existe = $this->MAlmacen->search_Almacen($data->nomb_alm);
        if ($existe) {
            echo json_encode(array(
                "success" => false,
                "msg" => "Nombre de Almacen en uso"
            ));
        } else {
            $this->MAlmacen->add_Almacen($datos); //y lo mando para la funcion register enh la model
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
                "data" => array(
                    array(
                        "id_Almacen" => mysql_insert_id(), // <--- importantisimo regresar el ID asignado al record, para que funcione correctamente el metodo update y delete
                        "nombre_Almacen" => $data->nomb_alm,
                    )
                )
            ));
        }
    }

    public function ext_update_Almacen() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        //meto todos os datos desde la view en un arreglo...
        $datos = array(
            'nomb_alm' => $data->nomb_alm,
        );
        $this->MAlmacen->update_almacen($data->id_alm, $datos); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_Almacen() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $existe = $this->MInventarioAlm->get_prod_by_alm($data->id_alm);
        if (isset($existe)) {
            echo json_encode(array(
                "success" => false,
                "msg" => "No se puede eliminar este almacén" 
            ));      
        } else {
            $this->MAlmacen->delete_almacen($data->id_alm); //y lo mando para la funcion register enh la model
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
            ));
        }
    }

}

