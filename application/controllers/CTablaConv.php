<?php

class CTablaConv extends CI_Controller {
     public function  __construct()    {
        parent::__construct();
		$this->load->model('MTablaConv');
                $this->load->model('MUm');
       
    }    
	
	public function ext_get_tabla()
	{
		$start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
		$limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
                $total=$this->db->count_all('tabla_conversion');
		$data = $this->MTablaConv->listar_tabla($limit,$start);
                $arr = array();
                foreach ($data->result() as $obj)
                {
                    $arr[] = $obj;
                }
                echo '{ metaData: { "root": "data"}';	
		echo ',"success":true,"total":"'.$total.'", "data":' . json_encode($arr) . '}';
		
		
	}	
	
	public function ext_add_tabla()
	{	
		$info = $_POST["data"];
		$data = json_decode(stripslashes($info));
		//meto todos os datos desde la view en un arreglo...
                $um1=$this->MUm->get_um($data->um1);
                $um2=$this->MUm->get_um($data->um2);
                $nomb_conv="De $um1 a $um2";
		$datos = array(
						'nomb_conv'=>$nomb_conv,
						'um1' =>$data->um1,
						'um2' =>$data->um2,
						'valor' =>$data->valor,
						'operacion' =>$data->operacion
						
		);
      
	  $this->MTablaConv->add_tabla($datos); //y lo mando para la funcion register enh la model
		echo json_encode(array(
					"success" 	=> mysql_errno() == 0,
					"msg"		=> mysql_errno() == 0?"Datos Agregados Correctamente":mysql_error(),
				));
	}
	public function ext_update_tabla()
	{	
		$info = $_POST["data"];
		$data = json_decode(stripslashes($info));
		//meto todos os datos desde la view en un arreglo...
	$datos = array(	
						'um1' =>$data->um1,
						'um2' =>$data->um2,
						'valor' =>$data->valor,
						'operacion' =>$data->operacion
						
		);	
		$this->MTablaConv->update_tabla($data->id_conv,$datos); //y lo mando para la funcion register enh la model
		echo json_encode(array(
		"success" 	=> mysql_errno() == 0,
		"msg"		=> mysql_errno() == 0?"Datos Actualizados":mysql_error()
	));
			
	}
	public function ext_delete_tabla()
	{	
		$info = $_POST["data"];
		$data = json_decode(stripslashes($info));				
		$this->MTablaConv->delete_taba($data->id_conv); //y lo mando para la funcion register enh la model
		echo json_encode(array(
		"success" 	=> mysql_errno() == 0,
		"msg"		=> mysql_errno() == 0?"Datos Borrados Correctamente":mysql_error()
	));
			
	}
}
   