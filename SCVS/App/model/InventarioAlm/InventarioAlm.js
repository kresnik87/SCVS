Ext.define('SCVS.model.InventarioAlm.InventarioAlm', {
    extend: 'Ext.data.Model',
	idProperty:'id_inv_alm',
    fields: [
				{ name: 'id_inv_alm', type: 'int'},
				{ name: 'id_prod', type: 'int'},
				{ name: 'nomb_prod', type: 'string'},
                                { name: 'cantidad', type: 'float'},
				{ name: 'importe', type: 'float'},
                                { name: 'imagen',type:'string'},
				{ name: 'p_costo', type: 'float'},
                                { name: 'fecha'},
                                { name: 'tipo_compra', type: 'int'},
				{ name: 'id_alm', type: 'int'},
                                { name: 'nomb_alm', type: 'string'},
                                { name: 'id_estado', type: 'int'},
				{ name: 'estado', type: 'string'},
				
           ]
});

			
			
			
	