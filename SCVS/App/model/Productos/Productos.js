Ext.define('SCVS.model.Productos.Productos', {
    extend: 'Ext.data.Model',
	idProperty:'id_prod',
    fields: [
				{ name: 'id_prod', type: 'int'},
				{ name: 'nomb_prod', type: 'string'},
				{ name: 'p_costo', type: 'float'},
                                { name: 'descripcion', type: 'string'},
                                { name: 'marca', type: 'string'},
				{ name: 'imagen',type:'string'},
				{ name: 'id_tabla', type: 'int'},
                                { name: 'concepto', type: 'string'},
                                { name: 'id_tipo_prod', type: 'int'},
                                { name: 'tipo_prod', type: 'string'}
                               
				
				
           ]
});

			
			
			
	