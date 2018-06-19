Ext.define('SCVS.controller.InventarioVent.InventarioVent', {
    extend: 'Ext.app.Controller',
    stores: ['InventarioVent.InventarioVent','BajaProd.BajaProd'],
    models: ['InventarioVent.InventarioVent','BajaProd.BajaProd'],
    views: ['InventarioVent.GrdInventarioVent', 'InventarioVent.CapturaEdicionInventarioVent','InventarioVent.BajaProd',
    'InventarioVent.UpdateCostInvVent','InventarioVent.PanelInventarioVent','InventarioVent.BajaProd','InventarioVent.Traslado'],
    refs: [//Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller

        {
            ref: 'gridInventarioVent',
            selector: 'gridInventarioVent'//<<--Vista dentro de un Grid
        },
        {
            ref:'panelGrdInventarioVent',
        selector:'panelGrdInventarioVent'//<<--Vista dentro de un Grid
        },
         {
            ref:'FormTraslado',
        selector:'FormTraslado'//<<--Vista dentro de un Grid
        }

    ],
    init: function () {
        var me = this;
        me.control({
            'gridInventarioVent dataview': {//Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
            },
            'gridInventarioVent button[action=actAgregar]': //Usando Ext.Component.Query
                    {
                        click: this.Agregar
                    },
            'gridInventarioVent button[action=actEditar]': //Usando Ext.Component.Query
                    {
                        click: this.Editar
                    },
            'FormAddInvVent button[action=actAddInv]': //Usando Ext.Component.Query
                    {
                        click: this.AgregarInventarioArea
                    },
            'FormAddInvVent button[action=actUpdate]': //Usando Ext.Component.Query
                    {
                        click: this.ActualizarInventario
                    },
             'FormBajaInv button[action=actAddTransf]': //Usando Ext.Component.Query
                    {
                        click: this.Transferir
                    }, 
                'FormUpdatePrecio button[action=actUpdateCost]'://Usando Ext.Component.Query
            {
				 
                click:this.UpdatePrecio
            },
            'gridInventarioVent button[action=actBorrar]': //Usando Ext.Component.Query
                    {
                        click: this.Eliminar

                    },
              'gridInventarioVent button[action=actUpdate]'://Usando Ext.Component.Query
            {
                click:this.Update
                
            },        
            'gridInventarioVent button[action=actBaja]': //Usando Ext.Component.Query
                    {
                        click: this.BajaProd

                    },
             'gridInventarioVent button[action=actTraslado]': //Usando Ext.Component.Query
                    {
                        click: this.TrasladoForm

                    },       
              'panelGrdInventarioVent button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
            'panelGrdInventarioVent button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            },  



        });
    },
    //Inician Funciones
    Search: function (button) {
        var win= button.up('form'),	
        nomb_prod=win.queryById('nomb_prod_area').getValue();
        id_tipo=win.queryById('id_tipo_prod_area').getValue();
        id_area=win.queryById('id_area_vent').getValue();
        p_costo=win.queryById('p_costo_area').getValue();
        p_venta=win.queryById('precio_venta_area').getValue();
        marca=win.queryById('marca_area').getValue();
        descripcion=win.queryById('descripcion_area').getValue();
        costo_inicial=win.queryById('p_costo_inicial_area').getValue();
        costo_final=win.queryById('p_costo_final_area').getValue();
        venta_inicial=win.queryById('p_venta_in').getValue();
        venta_final=win.queryById('p_venta_fi').getValue();
        store=this.getInventarioVentInventarioVentStore();
        proxy=store.getProxy();
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('id_area',id_area);
        proxy.setExtraParam('p_costo',p_costo);
        proxy.setExtraParam('p_venta',p_venta);
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('descripcion',descripcion);
        proxy.setExtraParam('costo_inicial',costo_inicial);
        proxy.setExtraParam('costo_final',costo_final);
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
    Agregar: function () {
        var FormAddEditarInventario = Ext.widget('FormAddInvVent');
        form = FormAddEditarInventario.down('form');
        form.queryById('BtnActualizar').setVisible(false);

    },
      Update: function(grid, record){	   	
        records = this.getGridInventarioVent().getSelectionModel().getSelection();
        if(records.length > 0){
            var FormUpdate= Ext.widget('FormUpdatePrecio');
            var EditForm=FormUpdate.down('form');	
            var record=records[0];			 
            EditForm.loadRecord(record);
        }
         	 
    },
     UpdatePrecio: function(button) {
        var win    = button.up('window'),
        form   = win.down('form');
        record = form.getRecord();            
        values = form.getValues();
        if (values.id_inv_area > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_inv_area);
            this.getInventarioVentInventarioVentStore().update(record);
        }		
		
        win.close();
       
    },
    BajaProd: function () {
        records = this.getGridInventarioVent().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormTransf = Ext.widget('FormBajaInv');
            var EditForm = FormTransf.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
        }
    },
     TrasladoForm: function () {
        records = this.getGridInventarioVent().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormTraslado = Ext.widget('FormTraslado');
            var EditForm = FormTraslado.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
        }
    },
    Transferir: function (button) {
        var win = button.up('window');
        form   = win.down('form');
        var record = Ext.create('SCVS.model.BajaProd.BajaProd');            
        var values = form.getValues();
        if (values.id_inv_area > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            //record.setId(values.id_inv_area);
            store=this.getBajaProdBajaProdStore();
            store.update(record);
        }       
        
        win.close();

    },
    Editar: function (grid, record) {
        records = this.getGridInventarioVent().getSelectionModel().getSelection();
        if (records.length > 0) {
            var FormAddEditarInventario = Ext.widget('FormAddInvVent');
            var EditForm = FormAddEditarInventario.down('form');
            var record = records[0];
            EditForm.loadRecord(record);
            EditForm.queryById('BtnAdd').setVisible(false);

        }

    },
    AgregarInventarioArea: function (button) {
        var win = button.up('window');
        form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        record = Ext.create('SCVS.model.InventarioVent.InventarioVent');
        record.set(values);
        record.setId(0);
        store = this.getInventarioVentInventarioVentStore();
        store.add(record);
        form.getForm().reset();

    },
    ActualizarInventario: function (button) {
        var win = button.up('window'),
        form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        if (values.id_inv > 0) { //Si Hay algun Valor, entra en Modo de Actualizacion
            record.set(values);
            record.setId(values.id_inv);
            this.getInventarioVentInventarioVentStore().update(record);
        }

        win.close();

    },
    Eliminar: function ()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridInventarioVent();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        Inventario = grid.getSelectionModel().getSelection()[0].data.nomb_prod;

        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getInventarioVentInventarioVentStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
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

















