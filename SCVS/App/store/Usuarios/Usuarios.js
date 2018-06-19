		
Ext.define('SCVS.store.Usuarios.Usuarios', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Usuarios.Usuarios',//Llamamos el Modelo Antes Creado
    autoSync: true,//Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'uid',
    proxy: {
        type: 'ajax',
        idParam :"uid",
        api: { //Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read    : BASE_URL + 'CUsuarios/ext_get_user',
            create  : BASE_URL + 'CUsuarios/ext_add_user',
            update  : BASE_URL + 'CUsuarios/ext_update_user',
            destroy : BASE_URL + "CUsuarios/ext_delete_user"
				
        },               
        reader: {
            type: 'json',
            idProperty: 'uid',
            root:'data'	                           
        },
        writer:{			
            encode: true,  
            writeAllFields: true,//decide si se manda al servidor solamente los campos modificados o todo  
            type: 'json',
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                var resp=Ext.decode(response.responseText);
                Ext.MessageBox.show({
                    title: 'ERROR',
                    msg: resp.msg,
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }	 
    }
});