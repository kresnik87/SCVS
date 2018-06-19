<?php

class CUnidadB extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MUnidadB');
        $this->load->model('MAlmacen');
        $this->load->model('MArea');
    }

    public function ext_get_unidad() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $data = $this->MUnidadB->listar_UnidadB(); //cargo el resu;ltado de una funcion en la model	        
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($arr) . '}';
    }

    public function ext_add_unidad() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        //meto todos os datos desde la view en un arreglo...
        $datos = array(
            'nomb_unid' => $data->nomb_unid
        );
        $existe = null;
        $existe = $this->MUnidadB->search_UnidadB($data->nomb_unid);
        if ($existe) {
            echo json_encode(array(
                "success" => false,
                "msg" => "Nombre de Unidad en uso"
            ));
        } else {
            $this->MUnidadB->add_UnidadB($datos); //y lo mando para la funcion register enh la model
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
                "data" => array(
                    array(
                        "id_unidad" => mysql_insert_id(), // <--- importantisimo regresar el ID asignado al record, para que funcione correctamente el metodo update y delete
                        "nombre_unidad" => $data->nomb_unid,
                    )
                )
            ));
        }
    }

    public function ext_update_unidad() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        //meto todos os datos desde la view en un arreglo...
        $datos = array(
            'nomb_unid' => $data->nomb_unid
        );
        $this->MUnidadB->update_UnidadB($data->id_unidad, $datos); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_unidad() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $alm = $this->MAlmacen->get_almacen_by_unidad($data->id_unidad);
        $area = $this->MArea->get_area_by_unidad($data->id_unidad);
        if (isset($alm, $area)) {
            echo json_encode(array(
                "success" => false,
                "msg" => "No se puede eliminar esta unidad" 
            ));
        } else {

            $this->MUnidadB->delete_UnidadB($data->id_unidad); //y lo mando para la funcion register enh la model
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
            ));
        }
    }

}

