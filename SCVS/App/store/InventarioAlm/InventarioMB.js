		
Ext.define('SCVS.store.InventarioAlm.InventarioMB', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.InventarioAlm.InventarioMB',//Llamamos el Modelo Antes Creado
    autoSync: true,//Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_inv_alm',
    groupField:'nomb_alm',
    proxy: {
        type: 'ajax',
        idParam :"id_inv_alm",
        api: { //Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read    : BASE_URL + 'CInventarioAlm/ext_get_inventario_mb',
            create  : BASE_URL + 'CInventarioAlm/ext_add_inventario_mb',
            update  : BASE_URL + 'CInventarioAlm/ext_update_inventario_mb',
            destroy : BASE_URL + "CInventarioAlm/ext_delete_inventario_mb"
				
        },               
        reader: {
            type: 'json',
            idProperty: 'id_inv_alm',
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