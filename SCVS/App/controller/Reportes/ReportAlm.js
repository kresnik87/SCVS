Ext.define('SCVS.controller.Reportes.ReportAlm',{
    extend		: 'Ext.app.Controller',
    stores		: ['Reportes.ReportAlm','Reportes.ReportSalAlm'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['Reportes.ReportAlm'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['Reportes.GrdReportAlm','Reportes.GrdReportSalAlm'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
    {
        ref:'gridReportAlm',
        selector:'gridReportAlm'//<<--Vista dentro de un Grid
    },
    {
        ref:'gridReportSalAlm',
        selector:'gridReportSalAlm'//<<--Vista dentro de un Grid
    },
	 {
            ref: 'panelGrdReportAlm',
            selector: 'panelGrdReportAlm'
        }
	
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridReportAlm button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
         
	    'gridReportSalAlm button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.EliminarSal
            },
            'panelGrdReportAlm button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
             'panelGrdReportAlm button[action=actClean]'://Usando Ext.Component.Query
            {
                 
                click:this.Clean
            }, 	   
			
			
			   
				  
        });
    },
    //Inician Funciones
   
     Search: function(button) {
       var win= button.up('form'),	
        alm=win.queryById('id_alm').getValue();
        nomb_prod=win.queryById('nomb_prod').getValue();
        id_tipo=win.queryById('id_tipo_prod').getValue();
        p_costo=win.queryById('p_costo').getValue();
        marca=win.queryById('marca').getValue();
        costo_inicial=win.queryById('p_costo_inicial').getValue();
        costo_final=win.queryById('p_costo_final').getValue();
        fecha_inicial=win.queryById('fecha_inicial').getValue();
        fecha_final=win.queryById('fecha_final').getValue();
        store=this.getReportesReportAlmStore();
        proxy=store.getProxy();
        proxy.setExtraParam('alm',alm);
        proxy.setExtraParam('nomb_prod',nomb_prod);
        proxy.setExtraParam('id_tipo',id_tipo);
        proxy.setExtraParam('p_costo',p_costo);
        proxy.setExtraParam('marca',marca);
        proxy.setExtraParam('costo_inicial',costo_inicial);
        proxy.setExtraParam('costo_final',costo_final);
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
    EliminarSal: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridReportSalAlm();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        report=grid.getSelectionModel().getSelection()[0].data.id_log;		
		
        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getReportesReportEntStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+report+' ?',
            icon : Ext.Msg.WARNING,
            fn : function(btn)
            {
                if (btn == 'yes')
                {			
		                           
                    store.remove(record);
                }
								
            }	
        });
    },	
    Eliminar: function()
    {
        //Para referirnos a un componente aca se utilizaran los Getters:
        var grid = this.getGridReportEnt();//Get+ Alias gridClientes (alias:'widget.gridClientes')
        record = grid.getSelectionModel().getSelection()[0]; 
        report=grid.getSelectionModel().getSelection()[0].data.id_log;		
		
        //En esta parte automaticamente el Controller crea las Funciones Getters
        store = this.getReportesReportEntStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
        Ext.MessageBox.show({
            title : 'Eliminar Registro',
            buttons : Ext.MessageBox.YESNO,
            msg : 'Desea Eliminar '+' '+report+' ?',
            icon : Ext.Msg.WARNING,
            fn : function(btn)
            {
                if (btn == 'yes')
                {			
		                           
                    store.remove(record);
                }
								
            }	
        });
    }
});

 















