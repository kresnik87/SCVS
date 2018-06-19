Ext.define('SCVS.model.Usuarios.Usuarios', {
    extend: 'Ext.data.Model',
    idProperty:'uid',
    fields: [
    {
        name: 'uid', 
        type: 'int'
    },
    {
        name: 'username', 
        type: 'string'
    },

    {
        name: 'password', 
        type: 'string'
    },
    {
        name: 'rol', 
        type: 'int'
    },
    {
        name: 'licencia', 
        type: 'string'
    }
    ]
});

			
			
			
	