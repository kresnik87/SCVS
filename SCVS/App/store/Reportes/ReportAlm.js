
Ext.define('SCVS.store.Reportes.ReportAlm', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Reportes.ReportAlm', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_log',
    groupField: 'nomb_alm',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam: "id_log",
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CReportes/ext_get_report_ent_alm',
            destroy: BASE_URL + "CReportes/ext_delete_report_alm"

        },
        reader: {
            type: 'json',
            idProperty: 'id_log',
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