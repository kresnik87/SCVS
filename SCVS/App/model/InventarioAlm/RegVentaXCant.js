Ext.define('SCVS.model.InventarioAlm.RegVentaXCant', {
    extend: 'Ext.data.Model',
	idProperty:'id_reg',
    fields: [
								{ name: 'id_reg', type: 'int'},
                                { name: 'id_alm', type: 'int'},
								{ name: 'id_inv_alm', type: 'int'},
                                { name: 'cant', type: 'int'},
                                { name: 'movimiento', type: 'string'},
                                { name: 'imagen', type: 'string'},
								{ name: 'p_venta', type: 'float'},
								{ name: 'p_costo', type: 'float'},
								{ name: 'importe_costo', type: 'float'},
                                { name: 'importe', type: 'float'},
                                { name: 'utilidad', type: 'float'},
                                { name: 'fecha'},
                                { name: 'id_prod', type: 'int'},
                                { name: 'nomb_cliente', type: 'string'},
                                { name: 'nomb_prod', type: 'string'},
                                { name: 'uid', type: 'int'},
                                { name: 'nombre', type: 'string'},
				
           ]
});

			
			
			
	