Ext.define('SCVS.store.TProd.TProd', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.TProd.TProd', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_tipo_prod',
    proxy: {
        type: 'ajax',
        idParam: "id_tipo_prod",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CTProd/ext_get_tipo_prod',
            create: BASE_URL + 'CTProd/ext_add_tipo_prod',
            update: BASE_URL + 'CTProd/ext_update_tipo_prod',
            destroy: BASE_URL + "CTProd/ext_delete_tipo_prod"
        },
        reader: {
            type: 'json',
            idProperty: 'id_tipo_prod',
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