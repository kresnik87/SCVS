		
Ext.define('SCVS.store.InventarioVent.InventarioVent', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.InventarioVent.InventarioVent',//Llamamos el Modelo Antes Creado
    autoSync: true,//Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_inv_area',
    groupField:'nomb_area',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam :"id_inv_area",
        api: { //Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read    : BASE_URL + 'CInventarioArea/ext_get_inventario',
            create  : BASE_URL + 'CInventarioArea/ext_add_inventario_area',
            update  : BASE_URL + 'CInventarioArea/ext_update_precio',
            destroy : BASE_URL + "CInventarioArea/ext_delete_inventario_area"
				
        },               
        reader: {
            type: 'json',
            idProperty: 'id_inv_area',
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