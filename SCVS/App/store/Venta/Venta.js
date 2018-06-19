		
Ext.define('SCVS.store.Venta.Venta', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.Venta.Venta',
    idProperty: 'id_inv_area',
    groupField:'nomb_area',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam :"id_inv_area",
        api: {
            read    : BASE_URL + 'CInventarioArea/ext_get_inventario',
            update  : BASE_URL + 'CVenta/ext_add_venta_area'
           
				
        },               
        reader: {
            type: 'json',
            idProperty: 'id_inv_area',
            root:'data'	                           
        },
        writer:{			
            encode: true,  
            writeAllFields: true,
            type: 'json',
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                var resp=Ext.decode(response.responseText);
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