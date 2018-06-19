
Ext.define('SCVS.store.Venta.RegVenta', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Venta.RegVenta', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_reg',
    groupField: 'nomb_area',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam: "id_reg",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CVenta/ext_get_reg_venta',
            destroy: BASE_URL + "CVenta/ext_delete_reg_venta"

        },
        reader: {
            type: 'json',
            idProperty: 'id_reg',
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