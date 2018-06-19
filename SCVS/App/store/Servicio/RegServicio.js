
Ext.define('SCVS.store.Servicio.RegServicio', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Servicio.RegServicio', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_reg_serv',
	groupField: 'nomb_area',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam: "id_reg_serv",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CServicio/ext_get_reg_serv',
			create  : BASE_URL + 'CServicio/ext_add_reg_serv',
            destroy: BASE_URL + "CServicio/ext_delete_reg_serv"

        },
        reader: {
            type: 'json',
            idProperty: 'id_reg_serv',
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