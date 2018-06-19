
Ext.define('SCVS.store.Productos.ProductosRep', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Productos.ProductosRep', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_prod',
    proxy: {
        type: 'ajax',
        idParam: "id_prod",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CProductos/ext_get_productos_rep',
            create: BASE_URL + 'CProductos/ext_add_productos_rep',
            update: BASE_URL + 'CProductos/ext_update_productos_rep',
            destroy: BASE_URL + "CProductos/ext_delete_productos_rep"

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