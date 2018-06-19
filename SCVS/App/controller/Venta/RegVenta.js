Ext.define('SCVS.controller.Venta.RegVenta', {
    extend: 'Ext.app.Controller',
    stores: ['Venta.RegVenta'],
    models: ['Venta.RegVenta'],
    views: ['Venta.GrdRegVenta','Venta.PanelRegVenta'],
    refs: [
        {
            ref: 'gridRegVenta',
            selector: 'gridRegVenta'
        },
        {
            ref: 'panelGrdRegVenta',
            selector: 'panelGrdRegVenta'
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridRegVenta button[action=actBorrar]':
                    {
                        click: this.Eliminar
                    },
            'panelGrdRegVenta button[action=actSearch]':
                    {
                        click: this.Search,
                        focus: this.Search
                    },
             'panelGrdRegVenta button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            }
        





        });
    },
    //Inician Funciones
    Search: function (button) {
        var win= button.up('form'),	
        nomb_prod=win.queryById('nomb_prod_vent').getValue();
        id_tipo=win.queryById('id_tipo_prod_vent').getValue();
        id_area=win.queryById('id_area_vent').getValue();
        p_venta=win.queryById('p_venta_vent').getValue();
        marca=win.queryById('marca_vent').getValue();
        descripcion=win.queryById('descripcion_vent').getValue();
        venta_inicial=win.queryById('p_venta_inicial_vent').getValue();
        venta_final=win.queryById('p_venta_final_vent').getValue();
        fecha_inicial=win.queryById('fecha_inicial_vent').getValue();
        fecha_final=win.queryById('fecha_final_vent').getValue();
        store=this.getVentaRegVentaStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('id_area',id_area);
        proxy.setExtraParam('p_venta',p_venta);
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('descripcion',descripcion);
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
        var grid = this.getGridRegVenta();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        report = grid.getSelectionModel().getSelection()[0].data.id_reg;

       
        store = this.getVentaRegVentaStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
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

















