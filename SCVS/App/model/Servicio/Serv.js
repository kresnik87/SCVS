Ext.define('SCVS.model.Servicio.Serv', {
    extend: 'Ext.data.Model',
	idProperty:'id_serv',
    fields: [
				{ name: 'id_serv', type: 'int'},
				{ name: 'nomb_servicio', type: 'string'},
                                { name: 'descripcion', type: 'string'},
                                { name: 'p_costo', type: 'float'},
                                { name: 'p_venta', type: 'float'},
                                { name: 'id_tipo_costo', type: 'int'},
                                { name: 'tipo_costo', type: 'string'}
				
           ]
});

			
			
			
	