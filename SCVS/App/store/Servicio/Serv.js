
Ext.define('SCVS.store.Servicio.Serv', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Servicio.Serv', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_serv',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam: "id_serv",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CServicio/ext_get_servicio',
            create: BASE_URL + 'CServicio/ext_add_servicio',
            update: BASE_URL + 'CServicio/ext_update_servicio',
            destroy: BASE_URL + "CServicio/ext_delete_servicio"

        },
        reader: {
            type: 'json',
            idProperty: 'id_serv',
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