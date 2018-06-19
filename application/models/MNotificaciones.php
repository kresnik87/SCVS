<?php

class MNotificaciones extends CI_Model {

    function get_notificaciones($start,$limit,$id_user){
	$this->db->where('id_user_rec',$id_user);
	$this->db->limit($limit, $start);
	$query=$this->db->get('notificaciones');
	return $query;
	}  
	  
	  function insert_notificacion($datos){
       
        $this->db->insert('notificaciones', $datos);
        $query = $this->db->insert_id();
        return $query;
    }
	

}