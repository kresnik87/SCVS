
Ext.define('SCVS.store.Reportes.ReportUtilidades', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Reportes.ReportUtilidades', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    groupField: 'fecha',
    proxy: {
        type: 'ajax',
        api: {//Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            read: BASE_URL + 'CReportes/ext_get_utilidad'

        },
        reader: {
            type: 'json',
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