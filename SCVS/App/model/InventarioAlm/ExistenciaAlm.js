Ext.define('SCVS.model.InventarioAlm.ExistenciaAlm', {
    extend: 'Ext.data.Model',
	idProperty:'reg_ex_alm',
    fields: [
				{ name: 'reg_ex_alm', type: 'int'},
				{ name: 'id_prod', type: 'int'},
				{ name: 'nomb_prod', type: 'string'},
                { name: 'existencia', type: 'float'},
                { name: 'imagen',type:'string'},
				{ name: 'p_costo', type: 'float'},
				{ name: 'importe', type: 'float'},
                { name: 'fecha'},
				{ name: 'id_alm', type: 'int'},
                { name: 'nomb_alm', type: 'string'},
                { name: 'nombre', type: 'string'}
           ]
});

			
			
			
	