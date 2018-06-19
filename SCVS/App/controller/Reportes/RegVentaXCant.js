Ext.define('SCVS.controller.Reportes.RegVentaXCant', {
    extend: 'Ext.app.Controller',
    stores: ['InventarioAlm.RegVentaXCant'],
    models: ['InventarioAlm.RegVentaXCant'],
    views: ['Reportes.GrdRegVentaXCant','Reportes.PanelRegVentaXCant'],
    refs: [
        {
            ref: 'gridRegVentaXCant',
            selector: 'gridRegVentaXCant'
        },
        {
            ref: 'panelGrdRegVentaXCant',
            selector: 'panelGrdRegVentaXCant'
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridRegVentaXCant button[action=actBorrar]':
                    {
                        click: this.Eliminar
                    },
            'panelGrdRegVentaXCant button[action=actSearch]':
                    {
                        click: this.Search,
                        focus: this.Search
                    },
             'panelGrdRegVentaXCant button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            }
        





        });
    },
    //Inician Funciones
    Search: function (button) {
        var win= button.up('form'),	
        nomb_prod=win.queryById('nomb_prod').getValue();
        id_tipo=win.queryById('id_tipo_prod').getValue();
        p_venta=win.queryById('p_venta').getValue();
        marca=win.queryById('marca').getValue();
        venta_inicial=win.queryById('p_venta_inicial').getValue();
        venta_final=win.queryById('p_venta_final').getValue();
        fecha_inicial=win.queryById('fecha_inicial').getValue();
        fecha_final=win.queryById('fecha_final').getValue();
        store=this.getInventarioAlmRegVentaXCantStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('p_venta',p_venta);
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('venta_inicial',venta_inicial);
        proxy.setExtraParam('venta_final',venta_final);
        proxy.setExtraParam('fecha_inicial',fecha_inicial);
        proxy.setExtraParam('fecha_final',fecha_final);
        proxy.setExtraParam('filtro',"true");
        store.load({
            params:{
                start:0,
                limit: 100 
            }
        });
        
    },
     Clean: function(button) {
        var form   = button.up('form');
        form.getForm().reset();
    },
    Eliminar: function ()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridRegVentaXCant();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        report = grid.getSelectionModel().getSelection()[0].data.id_reg;

       
        store = this.getInventarioAlmRegVentaXCantStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title: 'Eliminar Registro',
            buttons: Ext.MessageBox.YESNO,
            msg: 'Desea Eliminar ' + ' ' + report + ' ?',
            icon: Ext.Msg.WARNING,
            fn: function (btn)
            {
                if (btn == 'yes')
                {

                    store.remove(record);
                }

            }
        });
    }
});

















