<?php

class CProductos extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MProductos');
        
    }

    public function ext_get_productos() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('venta_directa');
       if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'p_costo' => $_REQUEST['p_costo'],
                'marca' => $_REQUEST['marca'],
                'descripcion' => $_REQUEST['descripcion'],
                'costo_inicial' => $_REQUEST['costo_inicial'],
                'costo_final' => $_REQUEST['costo_final']
            );
            $data = $this->MProductos->filtro($datos, $limit, $start);
            $dat = $this->MProductos->filtro($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        } else {
            $data = $this->MProductos->listar_productos($limit, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }
    }

    public function ext_get_productos_rep() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('componentes_rep');
        if (isset($_REQUEST['producto'])) {
            $data = $this->MProductos->get_producto_rep($_REQUEST['producto'], $limit, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $data->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        } else {
            $data = $this->MProductos->listar_productos_rep($limit, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }
    }

    public function ext_get_estado() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('estado_prod');
        $data = $this->MProductos->listar_estado($limit, $start);
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
    }

    public function ext_add_productos() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $existe = $this->MProductos->search_productos($data->nomb_prod, $data->p_costo, $data->id_tipo_prod);
        if ($existe) {
            echo json_encode(array(
                "success" => false,
                "msg" => "Ese producto ya existe"
            ));
        } else {
            $datos = array(
                'nomb_prod' => $data->nomb_prod,
                'p_costo' => $data->p_costo,
                'descripcion' => $data->descripcion
            );
            $id_prod = $this->MProductos->add_prod($datos);
            $datos_2 = array(
                'id_prod' => $id_prod,
                'marca' => $data->marca,
                'imagen' => $data->imagen,
                'id_tabla' => $data->id_tabla,
                'id_tipo_prod' => $data->id_tipo_prod
            );
            $this->MProductos->add_prod_venta($datos_2);
            echo json_encode(array(
                "success" => mysql_errno() == 0,
                "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
            ));
        }
    }

    public function ext_add_productos_rep() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));

        $datos = array(
            'nomb_prod' => $data->nomb_prod,
            'p_costo' => $data->p_costo,
            'descripcion' => $data->descripcion
        );
        $id_prod = $this->MProductos->add_prod($datos);
        $datos_3 = array(
            'id_prod' => $id_prod,
            'id_tipo_prod' => $data->id_tipo_prod
        );
        $this->MProductos->add_prod_rep($datos_3);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
        ));
    }

    public function ext_update_productos() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        var_dump($data);die;
        $datos = array(
            'nomb_prod' => $data->nomb_prod,
            'p_costo' => $data->p_costo,
            'descripcion' => $data->descripcion
        );
        $this->MProductos->update_prod($data->id_prod, $datos);
        $datos_2 = array(
            'marca' => $data->marca,
            'imagen' => $data->imagen,
            'id_tabla' => $data->id_tabla,
            'id_tipo_prod' => $data->id_tipo_prod
        );
        $this->MProductos->update_prod_venta($data->id_prod, $datos_2);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_update_productos_rep() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datos = array(
            'nomb_prod' => $data->nomb_prod,
            'p_costo' => $data->p_costo,
            'descripcion' => $data->descripcion
        );
        $this->MProductos->update_prod($data->id_prod, $datos);
        $datos_2 = array(
            'id_prod' => $id_prod,
            'id_tipo_prod' => $data->id_tipo_prod
        );
        $this->MProductos->update_prod_rep($data->id_prod, $datos_2);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_productos() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MProductos->delete_productos_venta($data->id_prod);
        $this->MProductos->delete_productos($data->id_prod);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

    public function ext_delete_productos_rep() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MProductos->delete_productos_rep($data->id_prod);
        $this->MProductos->delete_productos($data->id_prod);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}
