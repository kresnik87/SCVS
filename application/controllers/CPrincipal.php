<?php

class CPrincipal extends CI_Controller {
	public function __construct()
	  {
		    parent::__construct();
			$this->load->model('MVenta');
			$this->load->model('MProductos');
			$this->load->model('MInventarioAlm');
			$this->load->model('MInventarioArea');
			$this->load->model('MServicio');
			$this->load->model('MReportes');
			$this->load->model('MLog');
				
		}
public function index()
	{   
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
	$total_prod=$this->MProductos->total_productos();
	$prod_vend=$this->MVenta->get_prod_mas_vend_top_five();
	$utilidad=$this->get_utilidad_mensual();
	$data= array(
		'prod'=>$total_prod,
		'cap_inv'=>$temp_alm+$temp_area,
		'top_five'=>$prod_vend,
		//'mes'=>$utilidad('fecha'),
		'utilidad'=>$utilidad['total_utilidad']
	);
	//var_dump($data);die;
	$this->load->view('principal/index',$data);
		
	}

public function get_utilidad_mensual(){
	$fecha = new DateTime();
	$meses=array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Spetiembre','Octubre','Noviembre','Diciembre');
	$utilidad_venta=$this->MVenta->get_utilidad_vent_mensual($fecha->format('m'));
	$utilidad_venta_cant=$this->MVenta->get_utilidad_vent_cant_mensual($fecha->format('m'));
	$total=$utilidad_venta->utilidad+$utilidad_venta_cant->utilidad;
	
	$data = array(
				
                'total_utilidad' => $total
            );
	return $data;
}	
        
 public function do_upload() {
       
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'gif|jpg|png|jpeg';
        $config['max_size'] = '2000';
        $config['max_width'] = '1200';
        $config['max_height'] = '900';
        $config['overwrite'] = TRUE;
 
        $this->load->library('upload', $config);
        
        if (!$this->upload->do_upload('file_imagen')) {
            $error = array('error' => $this->upload->display_errors());
            echo'{success:false}';
           
        } else {
            $file_info = $this->upload->data();
            $this->_create_thumbnail($file_info['file_name']);
            $data = array('upload_data' => $this->upload->data());
            $imagen = $file_info['file_name'];
            echo json_encode(array(
                "success" => true,
                "file" =>  $imagen 
            ));
        }
       
 }
    function _create_thumbnail($filename){
        $config['image_library'] = 'gd2';
        //CARPETA EN LA QUE ESTÁ LA IMAGEN A REDIMENSIONAR
        $config['source_image'] = './uploads/'.$filename;
        $config['create_thumb'] = TRUE;
        $config['maintain_ratio'] = TRUE;
        $config['thumb_marker']='';
        //CARPETA EN LA QUE GUARDAMOS LA MINIATURA
        $config['new_image']='./uploads/thumbs/';
        $config['width'] = 150;
        $config['height'] = 150;
        $this->load->library('image_lib', $config);
        $this->image_lib->resize();
    }     

	public function ext_get_fix_bd(){
				 $datos= array(
                'uid' => '1'
            );
		
		$this->MVenta->fix_id_user_null_reg_venta($datos);
		$this->MVenta->fix_id_user_null_reg_venta_cant($datos);
		$this->MInventarioAlm->fix_bd_null_data_alm();
		$this->MInventarioAlm->fix_bd_null_data();
		
		$this->MServicio->fix_bd_null_data();
		$this->MLog->fix_bd_null_data_alm();
		$this->MLog->fix_bd_null_data_area();
		
		
		
	}
	public function ext_get_fix_utilidad(){
			
		
		$importe=$this->MVenta->get_importe_vent_cant()->result();
		$utilidad=0;
		for($i=0;$i<count($importe);$i++){
			
			$utilidad=($importe[$i]->importe)-($importe[$i]->importe_costo);
			$datos = array(
                'utilidad' => $utilidad
               
            );
			
			$this->MVenta->update_reg_venta($datos,$importe[$i]->id_reg);
		}
	
		
		
	}
	public function ext_get_fix_costo_venta(){
			
		
		$reg_venta=$this->MVenta->get_importe_vent()->result();
		$list_prod=$this->MProductos->get_producto_id();
		$utilidad=0;
			for($i=0;$i<count($reg_venta);$i++){
				for($j=0;$j<count($list_prod);$j++){
				if(($reg_venta[$i]->id_prod)==($list_prod[$j]->id_prod)){
					$datos=array(
							'p_costo'=>$list_prod[$j]->p_costo	
					);
					$this->MVenta->update_reg($datos,$reg_venta[$i]->id_reg);
				}	
			
			}						
		}
	}

	public function ext_get_fix_costo_ent_alm(){
			
		
		$reg_ent_alm=$this->MReportes->get_p_costo_ent_alm()->result();
		
			for($i=0;$i<count($reg_ent_alm);$i++){
					$datos=array(
							'p_costo'=>($reg_ent_alm[$i]->importe)/($reg_ent_alm[$i]->cant)	
					);
					$this->MReportes->update_ent_alm($datos,$reg_ent_alm[$i]->id_log);

			}						
		
	}
	public function ext_get_fix_importe_costo_reg_venta(){
			
		
		$reg_venta=$this->MVenta->get_importe_vent()->result();
		$utilidad=0;
			for($i=0;$i<count($reg_venta);$i++){
					$importe_costo=$reg_venta[$i]->p_costo*$reg_venta[$i]->cant;
					$utilidad=$reg_venta[$i]->importe-$importe_costo;
					$datos=array(
							'importe_costo'=>$importe_costo,
							'utilidad'=>$utilidad
					);
					$this->MVenta->update_reg($datos,$reg_venta[$i]->id_reg);
				}	
			
	}
	
	}
