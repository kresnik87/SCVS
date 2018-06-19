Ext.define('SCVS.model.BajaProd.BajaProd', {
    extend: 'Ext.data.Model',
	idProperty:'id_inv_area',
    fields: [
				
                                { name: 'id_inv_area', type: 'int'},
								{ name: 'id_prod', type: 'int'},
								{ name: 'nomb_prod', type: 'string'},
                                { name: 'cantidad', type: 'float'},
								{ name: 'motivos'},
                                { name: 'p_costo', type: 'float'},
                                { name: 'fecha'},
								{ name: 'id_area', type: 'int'}
                              
                                
				
           ]
});

			
			
			
	