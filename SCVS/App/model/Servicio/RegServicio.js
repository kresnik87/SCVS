Ext.define('SCVS.model.Servicio.RegServicio', {
    extend: 'Ext.data.Model',
	idProperty:'id_reg_serv',
    fields: [
				{ name: 'id_reg_serv', type: 'int'},
                { name: 'id_serv', type: 'int'}, 
				{ name: 'cant', type: 'int'},  	
				{ name: 'p_venta', type: 'float'},
                { name: 'importe', type: 'float'},
                { name: 'fecha'},
				{ name: 'precio', type: 'float'},
                { name: 'id_area', type: 'int'},
                { name: 'nomb_area', type: 'string'},
                { name: 'nomb_servicio', type: 'string'},
                { name: 'uid', type: 'int'},
			    { name: 'nombre', type: 'string'},
				
           ]
});

			
			
			
	