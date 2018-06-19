
Ext.define('SCVS.store.BajaProd.BajaProd', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.BajaProd.BajaProd',
    autoSync: true,
    autoSave: true,
    idProperty: 'id_inv_area',
    proxy: {
        type: 'ajax',
        idParam :"id_inv_area",
         api: { //Declaramos la API y Comienzan en estas lineas las operaciones CRUD
            update  : BASE_URL + 'CInventarioArea/ext_baja_prod'
        },       
        reader: {
            type: 'json',
            idProperty: 'id_inv_area',
            root: 'data'
        },
         writer:{           
            encode: true,  
            writeAllFields: true,//decide si se manda al servidor solamente los campos modificados o todo  
            type: 'json',
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