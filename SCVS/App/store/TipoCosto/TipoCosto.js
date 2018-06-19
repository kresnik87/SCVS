
Ext.define('SCVS.store.TipoCosto.TipoCosto', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.TipoCosto.TipoCosto', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_tipo_costo',
    proxy: {
        type: 'ajax',
        idParam: "id_tipo_costo",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CServicio/ext_get_tipo_costo'
        },
        reader: {
            type: 'json',
            idProperty: 'id_tipo_costo',
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