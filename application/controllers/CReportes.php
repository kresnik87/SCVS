<?php

class CReportes extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('MReportes');
        $this->load->model('MVenta');
        $this->load->model('MProductos');
		$this->load->model('MInventarioAlm');
		$this->load->model('MInventarioArea');
		$this->load->model('MVenta');
		$this->load->model('MServicio');
    }

    public function ext_get_report_ent_alm() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
       if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'alm'=>$_REQUEST['alm'],
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'p_costo' => $_REQUEST['p_costo'],
                'marca' => $_REQUEST['marca'],
                'fecha_inicial' => $_REQUEST['fecha_inicial'],
                'fecha_final' => $_REQUEST['fecha_final'],
                'costo_inicial' => $_REQUEST['costo_inicial'],
                'costo_final' => $_REQUEST['costo_final']
            );
            
            $data = $this->MReportes->filtro_rep_alm($datos, $limit, $start,1);
            $dat = $this->MReportes->filtro_rep_alm($datos, 0, $start,1);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }else{
        $data = $this->MReportes->listar_report_alm($limit, $start,1); //cargo el resu;ltado de una funcion en la model           
        $total = $this->db->count_all('log_alm');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';}
    }
	
	public function ext_get_reg_venta_cant() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
       if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'p_venta' => $_REQUEST['p_venta'],
                'marca' => $_REQUEST['marca'],
                'fecha_inicial' => $_REQUEST['fecha_inicial'],
                'fecha_final' => $_REQUEST['fecha_final'],
                'venta_inicial' => $_REQUEST['venta_inicial'],
                'venta_final' => $_REQUEST['venta_final']
            );
            $data = $this->MReportes->filtro($datos, $limit, $start);
            $dat = $this->MReportes->filtro($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }else{
        $data = $this->MReportes->listar_reg_venta_cant($limit, $start); //cargo el resu;ltado de una funcion en la model	        
        $total = $this->db->count_all('reg_vent_cant');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';}
    }
     public function ext_get_report_sal_alm() {
        $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
        if (isset($_REQUEST['alm'])) {
            $alm = $_REQUEST['alm'];
        } else {
            $alm = 0;
        }
        if (isset($_REQUEST['fecha'])) {
            $fecha = $_REQUEST['fecha'];
        } else {
            $fecha = 0;
        }
        $data = $this->MReportes->listar_report_alm($limit, $start, $alm,$fecha,2); //cargo el resu;ltado de una funcion en la model	        
        $total = $this->db->count_all('log_alm');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
    }
    public function ext_get_report_area() {
       $start = isset($_REQUEST['start']) ? $_REQUEST['start'] : 0;
        $limit = isset($_REQUEST['limit']) ? $_REQUEST['limit'] : 10;
       if (isset($_REQUEST['filtro'])) {
            $datos = array(
                'area'=>$_REQUEST['area'],
                'nomb_prod' => $_REQUEST['nomb_prod'],
                'id_tipo' => $_REQUEST['id_tipo'],
                'p_costo' => $_REQUEST['p_costo'],
                'marca' => $_REQUEST['marca'],
                'fecha_inicial' => $_REQUEST['fecha_inicial'],
                'fecha_final' => $_REQUEST['fecha_final'],
                'costo_inicial' => $_REQUEST['costo_inicial'],
                'costo_final' => $_REQUEST['costo_final']
            );
            
            $data = $this->MReportes->filtro_rep_area($datos, $limit, $start);
            $dat = $this->MReportes->filtro_rep_area($datos, 0, $start);
            $arr = array();
            foreach ($data->result() as $obj) {
                $arr[] = $obj;
            }
            $total = $dat->num_rows();
            echo '{ metaData: { "root": "data"}';
            echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';
        }else{
        $data = $this->MReportes->listar_report_area($limit, $start); //cargo el resu;ltado de una funcion en la model           
        $total = $this->db->count_all('log_area');
        $arr = array();
        foreach ($data->result() as $obj) {
            $arr[] = $obj;
        }
        echo '{ metaData: { "root": "data"}';
        echo ',"success":true,"total":"' . $total . '", "data":' . json_encode($arr) . '}';}
    }

    public function ext_delete_report_alm() {
        $info = $_POST["data"];
        $data = json_decode(stripslashes($info));
        $this->MReportes->delete_report_ent($data->id_log); //y lo mando para la funcion register enh la model
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "msg" => mysql_errno() == 0 ? "Datos Borrados Correctamente" : mysql_error()
        ));
    }
    
     public function ext_get_prod_mas_vendido() {
        $prod_vend=$this->MVenta->get_prod_mas_vend_top_five();
        
        
        var_dump($prod_vend);die;
    }
	
	public function ext_get_total_invertido(){
		$importe_alm=$this->MInventarioAlm->get_importe_costo()->result();
		$importe_area=$this->MInventarioArea->get_importe_costo()->result();
		$temp_alm=0;
		$temp_area=0;
		
		for($i=0;$i<count($importe_alm);$i++){
			$temp_alm+=$importe_alm[$i]->importe;
			
		}
		for($a=0;$a<count($importe_area);$a++){
			$temp_area+=$importe_area[$a]->importe_costo;
			
		}
		
		 $data[] = array(
                'importe_alm' => $temp_alm,
                'importe_area' => $temp_area,
                'total_invertido' => $temp_alm+$temp_area
            );

        echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($data) . '}';	
	}
	public function ext_get_total_ingresos(){
		$importe_venta=$this->MVenta->get_importe_venta()->result();
		$importe_serv=$this->MServicio->get_importe_serv()->result();
		$importe_venta_cant=$this->MVenta->get_importe_venta_cant()->result();
		$temp_vent=0;
		$temp_serv=0;
		$temp_vent_cant=0;
		
		for($i=0;$i<count($importe_venta);$i++){
			$temp_vent+=$importe_venta[$i]->importe;
			
		}
		for($a=0;$a<count($importe_serv);$a++){
			$temp_serv+=$importe_serv[$a]->importe;
			
		}
		for($j=0;$j<count($importe_venta_cant);$j++){
			$temp_vent_cant+=$importe_venta_cant[$j]->importe;
			
		}
		 $data[] = array(
                'total_ventas' => $temp_vent,
				'total_ventas_cant' => $temp_vent_cant,
                'total_servicio' => $temp_serv,
                'total_ingresos' => $temp_vent+$temp_serv+$temp_vent_cant
            );

        echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($data) . '}';	
		
		
		
	}
	public function ext_get_utilidad(){
		if (isset($_REQUEST['periodo'])) {
            $periodo = $_REQUEST['periodo'];
        } else {
            $periodo = 0;
        }
		
		switch($periodo){
			
			case 0:
			$data=$this->ext_get_utilidades_anual();
			break;
			case 1:
			$data=$this->ext_get_utilidades_diarias();
			break;
			case 2:
			$data=$this->ext_get_utilidades_mensuales();
			break;
			case 3:
			$data=$this->ext_get_utilidades_anual();
			break;
		}
		
		 echo '{ metaData: { "root": "data"}';
        echo ',"success":true, "data":' . json_encode($data) . '}';	
		
	}
	public function ext_get_utilidades_diarias(){
		$fecha = new DateTime();
		$cant_dias=$fecha->format('z');
		$fecha_i=$fecha->modify('-'.$cant_dias.'day');
		
		for($i=0;$i<$cant_dias;$i++){
			$utilidad_diaria_vent=$this->MVenta->get_utilidad_vent_diaria($fecha_i->format('Y-m-d'));
			$utilidad_diaria_vent_cant=$this->MVenta->get_utilidad_vent_cant_diaria($fecha_i->format('Y-m-d'));
			$utilidad_diaria_serv=$this->MServicio->get_utilidad_diaria($fecha_i->format('Y-m-d'));
			if(isset($utilidad_diaria_serv->utilidad)){
				$temp_util_serv=$utilidad_diaria_serv->utilidad;
				
			} else{
				$temp_util_serv=0;
				}
			if(isset($utilidad_diaria_vent->utilidad)){
				$temp_util_vent=$utilidad_diaria_vent->utilidad;
				
			} else{
				$temp_util_vent=0;
				}
			if(isset($utilidad_diaria_vent_cant->utilidad)){
				$temp_util_vent_cant=$utilidad_diaria_vent_cant->utilidad;
				
			} else{
				$temp_util_vent_cant=0;
				}
						
			$total=($temp_util_vent+$temp_util_serv+$temp_util_vent_cant);
			$data[$i] = array(
				'fecha'=>$fecha_i->format('Y-m-d'),
                'util_ventas' => $temp_util_vent,
				'util_ventas_cant' => $temp_util_vent_cant,
                'total_servicio' => $temp_util_serv,
                'total_utilidad' => $total
            );
			$fecha_i->modify('+1 day');
			
		}
		
		 foreach ($data as $a) {
                $dat[] = $a;
            }
		
		return $dat;
	}
	public function ext_get_utilidades_mensuales(){
		$fecha = new DateTime();
		$meses=array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Spetiembre','Octubre','Noviembre','Diciembre');
		for($h=1;$h<=$fecha->format('m');$h++){
			$utilidad_mensual_vent=$this->MVenta->get_utilidad_vent_mensual($h);
			$utilidad_mensual_vent_cant=$this->MVenta->get_utilidad_vent_cant_mensual($h);
			$utilidad_mensual_serv=$this->MServicio->get_utilidad_mensual($h);
			$total=($utilidad_mensual_serv->utilidad)+($utilidad_mensual_vent->utilidad)+($utilidad_mensual_vent_cant->utilidad);
			$data[$h] = array(
				'fecha'=>$meses[$h-1],
                'util_ventas' => $utilidad_mensual_vent->utilidad,
				'util_ventas_cant' => $utilidad_mensual_vent_cant->utilidad,
                'total_servicio' => $utilidad_mensual_serv->utilidad,
                'total_utilidad' => $total
            );
		}
		 foreach ($data as $a) {
                $dat[] = $a;
            }
		
		return $dat;
	}
	public function ext_get_utilidades_anual(){
		$fecha = new DateTime();
		$utilidad_venta=$this->MVenta->get_utilidad_vent_anual($fecha->format('Y'));
		$utilidad_serv=$this->MServicio->get_utilidad_anual($fecha->format('Y'));
		$utilidad_venta_cant=$this->MVenta->get_utilidad_vent_cant_anual($fecha->format('Y'));
		$total=($utilidad_venta->utilidad)+($utilidad_serv->utilidad)+($utilidad_venta_cant->utilidad);
		 $data[] = array(
				'fecha'=>$fecha->format('Y'),
                'util_ventas' => $utilidad_venta->utilidad,
				'util_ventas_cant' => $utilidad_venta_cant->utilidad,
                'total_servicio' => $utilidad_serv->utilidad,
                'total_utilidad' => $total
            );
		return $data;	

		
		
		
	}


}

