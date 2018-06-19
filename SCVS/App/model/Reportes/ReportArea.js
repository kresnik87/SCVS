Ext.define('SCVS.model.Reportes.ReportArea', {
    extend: 'Ext.data.Model',
	idProperty:'id_log',
    fields: [
				                { name: 'id_area', type: 'int'},
                                { name: 'nomb_area', type: 'string'},
                                { name: 'movimiento', type: 'string'},
				                { name: 'cant', type: 'float'},
                                { name: 'p_costo', type: 'float'},
                                { name: 'importe', type: 'float'},
                                { name: 'fecha'},
                                { name: 'nomb_prod', type: 'string'},
                                { name: 'nombre', type: 'string'},
                                { name: 'estado', type: 'string'}
				
           ]
});

			
			
			
	