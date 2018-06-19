Ext.define('SCVS.controller.Reportes.Reportes',{
    extend		: 'Ext.app.Controller',
    stores		: ['Reportes.ReportInversion','Reportes.ReportIngresos','Reportes.ReportUtilidades'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    models		: ['Reportes.ReportInversion','Reportes.ReportIngresos','Reportes.ReportUtilidades'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
    views		: ['Reportes.GrdReportInversion','Reportes.GrdReportIngresos','Reportes.GrdReportUtilidades'],
    refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
    {
        ref:'gridReportInversion',
        selector:'gridReportInversion'//<<--Vista dentro de un Grid
    },
    {
        ref:'gridReportIngresos',
        selector:'gridReportIngresos'//<<--Vista dentro de un Grid
    },
	{
        ref:'gridReportUtilidades',
        selector:'gridReportUtilidades'//<<--Vista dentro de un Grid
    }
	
    ],

    init	: function() {
        var me = this;
        me.control({
            'gridReportAlm button[action=actBorrar]'://Usando Ext.Component.Query
            {
                click:this.Eliminar
            },
            'gridReportAlm button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Search,
                focus:this.Search
            },
			 'gridReportUtilidades button[action=actSearch]'://Usando Ext.Component.Query
            {
				 
                click:this.Buscar_Utilidad,
                focus:this.Buscar_Utilidad
            }
	    	   
			
			
			   
				  
        });
    },
    //Inician Funciones
    Search: function(button) {
        var win = button.up('toolbar'),
        alm=win.getComponent('alm').getValue();
        fecha=win.getComponent('fecha').getValue();
        store=this.getReportesReportAlmStore();
        proxy=store.getProxy();
        proxy.setExtraParam('alm',alm);
        proxy.setExtraParam('fecha',fecha);
        store.load();
	     
       
    },	
     SearchSal: function(button) {
        var win = button.up('toolbar'),
        alm=win.getComponent('alm').getValue();
        fecha=win.getComponent('fecha').getValue();
        store=this.getReportesReportSalAlmStore();
        proxy=store.getProxy();
        proxy.setExtraParam('alm',alm);
        proxy.setExtraParam('fecha',fecha);
        store.load();
	     
       
    },	
	Buscar_Utilidad: function(button) {
        var win = button.up('toolbar'),
        periodo=win.getComponent('periodo').getValue();
        store=this.getReportesReportUtilidadesStore();
        proxy=store.getProxy();
        proxy.setExtraParam('periodo',periodo);
        
        store.load();
	     
       
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

 















