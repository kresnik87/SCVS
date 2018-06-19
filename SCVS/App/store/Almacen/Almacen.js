
Ext.define('SCVS.store.Almacen.Almacen', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Almacen.Almacen', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_alm',
    proxy: {
        type: 'ajax',
        idParam: "id_alm",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CAlmacen/ext_get_almacen',
            create: BASE_URL + 'CAlmacen/ext_add_almacen',
            update: BASE_URL + 'CAlmacen/ext_update_almacen',
            destroy: BASE_URL + "CAlmacen/ext_delete_almacen"

        },
        reader: {
            type: 'json',
            idProperty: 'id_alm',
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