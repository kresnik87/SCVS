		
Ext.define('SCVS.store.BProd.BProd', {
    extend: 'Ext.data.Store',
    model: 'SCVS.model.BProd.BProd',//Llamamos el Modelo Antes Creado
    autoSync: true,//Sincronizacion con el Servidor			
    autoSave: true,
    idProperty: 'id_prod',
	pageSize:100,
    proxy: {
        type: 'ajax',
        idParam :"id_prod",
        url:BASE_URL+'CProductos/ext_get_productos', 
        extraParam:{
            nombre:''	
        },			   
        reader: {
            type: 'json',
            idProperty: 'id_prod',
            root:'data'	                           
        },
								
        listeners: {
            exception: function(proxy, response, operation){
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