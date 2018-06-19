		
Ext.define('SCVS.store.TablaDep.TablaDep', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.TablaDep.TablaDep',//Llamamos el Modelo Antes Creado
    autoSync: true,//Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_tabla',
    proxy: {
        type: 'ajax',
        idParam :"id_tabla",
        api: { //Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read    : BASE_URL + 'CTablaDep/ext_get_tabla',
            create  : BASE_URL + 'CTablaDep/ext_add_tabla',
            update  : BASE_URL + 'CTablaDep/ext_update_tabla',
            destroy : BASE_URL + "CTablaDep/ext_delete_tabla"
				
        },               
        reader: {
            type: 'json',
            idProperty: 'id_tabla',
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