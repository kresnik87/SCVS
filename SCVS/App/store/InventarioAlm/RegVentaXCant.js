
Ext.define('SCVS.store.InventarioAlm.RegVentaXCant', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.InventarioAlm.RegVentaXCant', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_reg',
	groupField: 'nomb_cliente',
    proxy: {
        type: 'ajax',
        idParam: "id_reg",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CReportes/ext_get_reg_venta_cant',
			create: BASE_URL + 'CInventarioAlm/ext_add_reg_venta_cant',
            destroy: BASE_URL + "CInventarioAlm/ext_delete_reg_venta_cant"

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