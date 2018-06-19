		
Ext.define('SCVS.store.Comp.Comp', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Comp.Comp',//Llamamos el Modelo Antes Creado
    autoSync: true,//Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_comp',
    groupField:'nomb_mod',
    proxy: {
        type: 'ajax',
        idParam :"id_comp",
        api: { //Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read    : BASE_URL + 'CComponentes/ext_get_comp',
            create  : BASE_URL + 'CComponentes/ext_add_comp',
            update  : BASE_URL + 'CComponentes/ext_update_comp',
            destroy : BASE_URL + "CComponentes/ext_delete_comp"
				
        },               
        reader: {
            type: 'json',
            idProperty: 'id_comp',
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