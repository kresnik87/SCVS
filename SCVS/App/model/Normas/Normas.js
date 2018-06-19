Ext.define('SCVS.model.Normas.Normas', {
    extend: 'Ext.data.Model',
    idProperty:'id_norma',
    fields: [
    {
        name: 'id_norma', 
        type: 'int'
    },

    {
        name: 'norma', 
        type: 'string'
    },
    {
        name: 'destino', 
        type: 'int'
    },
    {
        name: 'nomb_prod', 
        type: 'string'
    },

    {
        name: 'preparacion', 
        type: 'string'
    },

    {
        name: 'elaboracion', 
        type: 'string'
    },

    {
        name: 'presentacion', 
        type: 'string'
    },

    {
        name: 'cant_bruto', 
        type: 'int'
    },

    {
        name: 'cant_net', 
        type: 'int'
    },

    {
        name: 'cant_serv', 
        type: 'int'
    },

    {
        name: 'id_ing', 
        type: 'int'
    },

    {
        name: 'id_prod', 
        type: 'int'
    }
				
				
    ]
});

			
			
			
	