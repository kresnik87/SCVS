Ext.define('SCVS.controller.Servicio.RegServicio', {
    extend: 'Ext.app.Controller',
    stores: ['Servicio.RegServicio'],
    models: ['Servicio.RegServicio'],
    views: ['Servicio.RealizarServicio','Servicio.PanelRegServ','Servicio.GrdRegServ'],
    refs: [
        
		        {
            ref: 'FormAddServ',
            selector: 'FormAddServ'
			},
			{
            ref: 'gridRegServ',
            selector: 'gridRegServ'
        },
        {
            ref: 'panelGrdRegServ',
            selector: 'panelGrdRegServ'
        }

    ],
    init: function () {
        var me = this;
        me.control({
          
			  'FormAddServ button[action=actAddServ]'://Usando Ext.Component.Query
            {
				 
                click:this.Agregar_Servicio
            },
			'gridRegServ button[action=actBorrar]':
                    {
                        click: this.Eliminar
                    },
			'gridRegServ button[action=actServ]':
                    {
                        click: this.Servicio
                    },		
            'panelGrdRegServ button[action=actSearch]':
                    {
                        click: this.Search,
                        focus: this.Search
                    },
             'panelGrdRegServ button[action=actClean]'://Usando Ext.Component.Query
            {
				 
                click:this.Clean
            }
        





        });
    },
    //Inician Funciones
    Search: function (button) {
        var win= button.up('form'),	
        id_serv=win.queryById('id_serv').getValue();
        id_area=win.queryById('id_area_serv').getValue();
        precio=win.queryById('precio').getValue();
        venta_inicial=win.queryById('p_venta_inicial_serv').getValue();
        venta_final=win.queryById('p_venta_final_serv').getValue();
        fecha_inicial=win.queryById('fecha_inicial_serv').getValue();
        fecha_final=win.queryById('fecha_final_serv').getValue();
        store=this.getServicioRegServicioStore();
        proxy=store.getProxy();
        proxy.setExtraParam('id_serv',id_serv);
        proxy.setExtraParam('id_area',id_area);
        proxy.setExtraParam('precio',precio);
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
    Eliminar: function ()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridRegServ();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0];
        report = grid.getSelectionModel().getSelection()[0].data.id_reg_serv;

       
        store = this.getServicioRegServicioStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
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

















