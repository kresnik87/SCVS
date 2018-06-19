
Ext.define('SCVS.store.Productos.Productos', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Productos.Productos', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_prod',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam: "id_prod",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CProductos/ext_get_productos',
            create: BASE_URL + 'CProductos/ext_add_productos',
            update: BASE_URL + 'CProductos/ext_update_productos',
            destroy: BASE_URL + "CProductos/ext_delete_productos"

        },
        reader: {
            type: 'json',
            idProperty: 'id_prod',
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