Ext.define('SCVS.model.Venta.Venta', {
    extend: 'Ext.data.Model',
	idProperty:'id_inv_area',
    fields: [
				
                                { name: 'id_inv_area', type: 'int'},
				{ name: 'id_prod', type: 'int'},
				{ name: 'nomb_prod', type: 'string'},
                                { name: 'imagen', type: 'string'},
                                { name: 'tipo_compra', type: 'int'},
                                { name: 'cantidad', type: 'float'},
				{ name: 'importe', type: 'float'},
				{ name: 'p_venta', type: 'float'},
                                { name: 'p_costo', type: 'float'},
                                { name: 'usar_p_cant', type: 'boolean'},
                                { name: 'p_venta_cantidad', type: 'float'},
				{ name: 'id_estado', type: 'int'},
                                { name: 'fecha'},
				{ name: 'id_area', type: 'int'},
                                { name: 'nomb_area', type: 'string'},
                                { name: 'nombre', type: 'string'},
                                { name: 'ci', type: 'string'}
				
           ]
});

			
			
			
	