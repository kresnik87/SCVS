<?php

class CUsuarios extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MUsuarios');
        $this->load->model('MPerfil');
    }

    public function ext_get_user() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        $total = $this->db->count_all('usuarios');
        $data = $this->MUsuarios->listar_user();
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
    }

    public function ext_add_user() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $uid = $this->session->userdata('uid');
        $lic=$this->MUsuarios->get_licencia_user($uid);
        $datosUser = array(
            'username' => $data->username,
            'password' => sha1($data->password),
            'rol'=>$data->rol,
            'licencia'=>$lic
        );
        $id_user=$this->MUsuarios->add_user($datosUser);
        $this->MPerfil->insert_perfil($id_user);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Agregados Correctamente" : mysql_error(),
        ));
    }
    public function ext_add_perfil() {
        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $edad= $_POST["edad"];
        $fecha_nac = $_POST["fecha_nac"];
        $sexo = $_POST["sexo"];
        $telefono = $_POST["telefono"];
        $direccion = $_POST["direccion"];
        $foto = $_POST["foto"];
        $uid = $this->session->userdata('uid');
        $datosPerfil = array(
            'nombre' => $nombre,
            'apellidos' =>$apellidos,
            'telefono'=>$telefono,
            'foto'=>$foto,
            'direccion'=>$direccion,
            'sexo'=>$sexo,
            'edad'=>$edad,
            'fecha_nac'=>$fecha_nac
        );
        
        $this->MUsuarios->update_perfil($uid,$datosPerfil);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Perfil Actualizado" : mysql_error(),
        ));
    }

    public function ext_update_user() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $datosUser = array(
            'username' => $data->username,
            'password' => sha1($data->password),
            'rol'=>$data->rol,
        );
        $this->MUsuarios->update_user($data->uid, $datosUser); 
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Actualizados" : mysql_error()
        ));
    }

    public function ext_delete_user() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
		$this->MPerfil->delete_perfil($data->uid);
        $this->MUsuarios->delete_user($data->uid);
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }

}

