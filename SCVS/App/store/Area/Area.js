
Ext.define('SCVS.store.Area.Area', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Area.Area', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_area',
    proxy: {
        type: 'ajax',
        idParam: "id_area",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CArea/ext_get_Area',
            create: BASE_URL + 'CArea/ext_add_Area',
            update: BASE_URL + 'CArea/ext_update_Area',
            destroy: BASE_URL + "CArea/ext_delete_Area"

        },
        reader: {
            type: 'json',
            idProperty: 'id_area',
            root: 'data'
        },
        writer: {
            encode: true,
            writeAllFields: true, //decide si se manda al servidor solamente los campos modificados o todo  
            type: 'json',
            root: 'data'
        },
        listeners: {
            exception: function (proxy, response, operation) {
                var resp = Ext.decode(response.responseText);
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