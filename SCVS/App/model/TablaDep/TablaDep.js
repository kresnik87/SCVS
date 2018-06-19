Ext.define('SCVS.model.TablaDep.TablaDep', {
    extend: 'Ext.data.Model',
    idProperty:'id_tabla',
    fields: [
    {
        name: 'id_tabla', 
        type: 'int'
    },

    {
        name: 'concepto', 
        type: 'string'
    },
    {
        name: 'porciento', 
        type: 'int'
    },
    {
        name: 'tiempo', 
        type: 'int'
    }	
    ]
});

			
			
			
	