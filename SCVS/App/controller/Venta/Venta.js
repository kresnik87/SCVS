Ext.define('SCVS.controller.Venta.Venta', {
    extend: 'Ext.app.Controller',
    stores: ['Venta.Venta'],
    models: ['Venta.Venta'],
    views: ['Venta.GrdVenta', 'Venta.RealizarVenta','Venta.PanelVenta','Servicio.RealizarServicio'],
    refs: [//Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller

        {
            ref: 'gridVenta',
            selector: 'gridVenta'//<<--Vista dentro de un Grid
        },
        {
            ref: 'panelGrdVenta',
            selector: 'panelGrdVenta'//<<--Vista dentro de un Grid
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridVenta dataview': {//Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Venta
            },
          
            'gridVenta button[action=actVenta]': //Usando Ext.Component.Query
                    {
                        click: this.Venta
                    },
			'gridVenta button[action=actServ]':
                    {
                        click: this.Servicio
                    },			
               
            'FormAddVenta button[action=actAddInv]': //Usando Ext.Component.Query
                    {
                        click: this.AgregarInventarioArea
                    },
           
            'gridVenta button[action=actBorrar]': //Usando Ext.Component.Query
                    {
                        click: this.Eliminar

                    },
         
           'panelGrdVenta button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
            'panelGrdVenta button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            },  


        });
    },
    //Inician Funciones
   Search: function (button) {
        var win= button.up('form'),	
        nomb_prod=win.queryById('nomb_prod').getValue();
        id_tipo=win.queryById('id_tipo_prod').getValue();
        id_area=win.queryById('id_area').getValue();
        precio_venta=win.queryById('precio_venta').getValue();
        marca=win.queryById('marca').getValue();
        descripcion=win.queryById('descripcion').getValue();
        venta_inicial=win.queryById('p_venta_inicial').getValue();
        venta_final=win.queryById('p_venta_final').getValue();
        store=this.getVentaVentaStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('id_area',id_area);
        proxy.setExtraParam('p_venta',precio_venta);
        proxy.setExtraParam('p_costo',"");
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('descripcion',descripcion);
        proxy.setExtraParam('costo_inicial',"");
        proxy.setExtraParam('costo_final',"");
        proxy.setExtraParam('venta_inicial',venta_inicial);
        proxy.setExtraParam('venta_final',venta_final);
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
	 Servicio: function(){
        var FormAdd= Ext.widget('FormAddServ');
        form=FormAdd.down('form');
       
			
    },
	Agregar_Servicio: function (button) {
       var win = button.up('window'),
        form = win.down('form'),
		record = form.getRecord(),
        values = form.getValues();
        record = Ext.create('SCVS.model.Servicio.RegServicio');
        record.set(values);
        record.setId(0);
        this.getServicioRegServicioStore().add(record);
        form.getForm().reset();

    },
    Venta: function (grid, record) {
        records = this.getGridVenta().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormAddVenta = Ext.widget('FormAddVenta');
            var EditForm = FormAddVenta.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
        }

    },
    AgregarInventarioArea: function (button) {
       var win = button.up('window'),
        form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        if (values.id_inv_area > 0) {
            record.set(values);
            record.setId(values.id_inv_area);
            this.getVentaVentaStore().update(record);
        }

        win.close();

    },
   
    Eliminar: function ()
    {
       
        var grid = this.getGridInventarioVent();
        record = grid.getSelectionModel().getSelection()[0];
        Inventario = grid.getSelectionModel().getSelection()[0].data.nomb_prod;
        store = this.getInventarioVentInventarioVentStore();
        Ext.MessageBox.show({
            title: 'Eliminar Registro',
            buttons: Ext.MessageBox.YESNO,
            msg: 'Desea Eliminar ' + ' ' + Inventario + ' ?',
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

















