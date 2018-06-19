Ext.define('SCVS.controller.Estado.Estado',{
	extend		: 'Ext.app.Controller',
	stores		: ['Estado.Estado'],//Nota1: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
	models		: ['Estado.Estado'],//Nota2: Carpeta + Archivo Clientes.js,ver en la funcion de eliminar el get
	refs:[ //Esta linea se usa cuando se hace referencia a una Vista dentro de un grid en un Controller
	 
	  {
	    ref:'gridTablaConv',
		selector:'gridTablaConv'//<<--Vista dentro de un Grid
	  }
	
	],

	init	: function() {
		var me = this;
		me.control({
		    'gridTablaConv dataview': { //Usando Ext.Component.Query,aca hacemos referencia a la vista del Grid
                itemdblclick: this.Editar
			},
		    'gridTablaConv button[action=actAgregar]'://Usando Ext.Component.Query
			   {
				 click:this.Agregar
			   },
			'gridTablaConv button[action=actEditar]'://Usando Ext.Component.Query
			   {
				 click:this.Editar
			   },
		   'FormAddEdicionTablaConv button[action=actAdd]'://Usando Ext.Component.Query
			   {
				 
				 click:this.AgregarTablaConv
			   },
			'FormAddEdicionTablaConv button[action=actUpdate]'://Usando Ext.Component.Query
			   {
				 
				 click:this.ActualizarTablaConv
			   },   
		    'gridTablaConv button[action=actBorrar]'://Usando Ext.Component.Query
			   {
				 click:this.Eliminar
			   },
			  'gridTablaConv button[action=actSearch]'://Usando Ext.Component.Query
			   {
				 
				 click:this.Search,
				 focus:this.Search
			   }     
			
			
			   
				  
		});
	},
	//Inician Funciones
	Search: function(button) {
		var win = button.up('toolbar'),
		nomb=win.getComponent('prod').getValue();
		store=this.getTablaConvTablaConvStore();
		proxy=store.getProxy();
		proxy.setExtraParam('nomb_prod',nomb);
		store.load();
	     
       
    },				
	Agregar: function(){
	    var FormAddEditarTablaConv= Ext.widget('FormAddEdicionTablaConv');
		    form=FormAddEditarTablaConv.down('form');	
			field= form.down('toolbar');
			field.getComponent(2).setVisible(false);		
		
			},
	
	Editar: function(grid, record){	   	
	    records = this.getGridTablaConv().getSelectionModel().getSelection();
	    if(records.length > 0){
		     var FormAddEditarTablaConv= Ext.widget('FormAddEdicionTablaConv');
		     var EditForm=FormAddEditarTablaConv.down('form');	
		     var record=records[0];			 
		     EditForm.loadRecord(record);
			field= EditForm.down('toolbar');	
			 field.getComponent(1).setVisible(false);
		   
		}
         	 
	},
	
	AgregarTablaConv: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();	 
			record = Ext.create('SISGIVENT.model.TablaConv.TablaConv');
			record.set(values);
			record.setId(0);
			this.getTablaConvTablaConvStore().add(record);		
         form.getForm().reset();
       
    },
	
	ActualizarTablaConv: function(button) {
        var win    = button.up('window'),
            form   = win.down('form');
	record = form.getRecord();            
            values = form.getValues();
	if (values.id_conv > 0){ //Si Hay algun Valor, entra en Modo de Actualizacion
	        record.set(values);
			record.setId(values.id_conv);
			this.getTablaConvTablaConvStore().update(record);
			}		
		
        win.close();
       
    },
	
	Eliminar: function()
	{
	    //Para referirnos a un componente aca se utilizaran los Getters:
		var grid = this.getGridTablaConv();//Get+ Alias gridClientes (alias:'widget.gridClientes')
		record = grid.getSelectionModel().getSelection()[0]; 
		TablaConv=grid.getSelectionModel().getSelection()[0].data.id_conv;		
		
		//En esta parte automaticamente el Controller crea las Funciones Getters
		store = this.getTablaConvTablaConvStore();//Nota 1: Get+Carpeta.Clientes Store+La palabra Store
	    Ext.MessageBox.show({
           title : 'Eliminar Registro',
    	   buttons : Ext.MessageBox.YESNO,
		   msg : 'Desea Eliminar '+' '+TablaConv+' ?',
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

 















