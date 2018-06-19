
Ext.define('SCVS.store.BAlm.BAlm', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.BAlm.BAlm', //Llamamos el Modelo Antes Creado
    autoSync: true, //Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_inv_alm',
    proxy: {
        type: 'ajax',
        idParam: "id_inv_alm",
        url: BASE_URL + 'CInventarioAlm/ext_get_inventario',
        extraParam: {
            nombre: ''
        },
        reader: {
            type: 'json',
            idProperty: 'id_inv_alm',
            root: 'data'
        },
        listeners: {
            exception: function (proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'ERROR',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});