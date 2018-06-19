Ext.define('SCVS.model.Reportes.ReportAlm', {
    extend: 'Ext.data.Model',
	idProperty:'id_log',
    fields: [
				                { name: 'id_alm', type: 'int'},
                                { name: 'nomb_alm', type: 'string'},
                                { name: 'movimiento', type: 'string'},
				                { name: 'cant', type: 'float'},
                                { name: 'p_costo'},
                                { name: 'importe', type: 'float'},
                                { name: 'fecha'},
                                { name: 'nomb_prod', type: 'string'},
                                { name: 'nombre', type: 'string'},
                                { name: 'tipo_compra', type: 'int'}
				
           ]
});

			
			
			
	